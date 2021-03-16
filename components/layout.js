import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import { name, siteTitle } from "../util/const";
import utilStyles from "../styles/utils.module.css";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>
                                    {name}
                                </a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
