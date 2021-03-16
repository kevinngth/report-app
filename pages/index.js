import useSWR from "swr";
import { fetchAll } from "../api";
import Layout from "../components/layout";
import TableRow from "../components/tableRow";
import TableHeader from "../components/tableHeader";

export default function Home() {
    const { data, error } = useSWR("/api/user/123", fetchAll);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <Layout title="Dashboard">
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <TableHeader />
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {data.map((report) => {
                                        return <TableRow report={report} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
