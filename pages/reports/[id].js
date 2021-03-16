import Date from "../../components/date";
import Layout from "../../components/layout";
import { fetchPaths, getReport } from "../../api";

export default function Report({ reportData }) {
    const {
        id,
        title,
        dateCreated,
        username,
        content,
        isApproved,
        approvedTimestamp,
    } = reportData;
    return (
        <Layout title={title}>
            <br />
            Created by {username}, <Date dateString={dateCreated} />
            <br />
            {content}
            <br />
            {isApproved == "true" ? (
                <>
                    Approved <Date dateString={approvedTimestamp} />
                </>
            ) : (
                "Not approved"
            )}
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = fetchPaths();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const [reportData] = getReport(params.id);
    return {
        props: {
            reportData,
        },
    };
}
