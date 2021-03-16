import useSWR from "swr";
import Link from "next/link";
import { fetchAll } from "../api";
import Date from "../components/date";
import Layout from "../components/layout";
import truncateText from "../util/truncateText";

export default function Home() {
    const { data, error } = useSWR("/api/user/123", fetchAll);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <Layout title="Dashboard">
            {data.map((report) => {
                return (
                    <Link href={"/reports/" + report.id} key={report.id}>
                        <a>
                            <Date dateString={report.dateCreated} />
                            <h3>{report.title} &rarr;</h3>
                            <p>{truncateText(report.content, 30)}</p>
                        </a>
                    </Link>
                );
            })}
        </Layout>
    );
}
