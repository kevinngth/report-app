import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import { fetchAll } from "../api";
import Layout from "../components/layout";
import truncateText from "../util/truncateText";
import utilStyles from "../styles/utils.module.css";
import { name, siteTitle, accountType } from "../util/const";

export default function Home() {
    const { data, error } = useSWR("/api/user/123", fetchAll);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Welcome, {name}!</p>
            </section>
            <section>
                <p className="description">
                    Account type: <code>{accountType}</code>
                </p>

                <div className="grid">
                    {data.map((report) => {
                        return (
                            <Link
                                href={"/reports/" + report.id}
                                key={report.id}
                            >
                                <a className="card">
                                    <Date dateString={date} />
                                    <h3>{report.title} &rarr;</h3>
                                    <p>{truncateText(report.content, 30)}</p>
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
}
