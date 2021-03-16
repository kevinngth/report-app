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
