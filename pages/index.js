import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import truncateText from "../util/truncateText";
import utilStyles from "../styles/utils.module.css";
import { name, siteTitle, accountType, reports } from "../util/const";

export default function Home() {
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
                    {reports.map((report) => {
                        return (
                            <Link
                                href={"/reports/" + report.id}
                                key={report.id}
                            >
                                <a className="card">
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
