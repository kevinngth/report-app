import Link from "next/link";
import Layout from "../../components/layout";

export default function Login({ reportData }) {
    return (
        <Layout title="Login">
            <Link href="/user/register">
                <a>New user? Register here</a>
            </Link>
        </Layout>
    );
}
