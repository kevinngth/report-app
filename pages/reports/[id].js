import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Report() {
    return (
        <Layout>
            <Head>
                <title>Report</title>
            </Head>
            <h1>Report</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
}
export async function getServerSideProps({ params }) {
    // Fetch necessary data for the blog post using params.id
}
