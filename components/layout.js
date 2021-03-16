import Navbar from "./navbar";
import { user } from "../const";

export default function Layout({ children, title }) {
    return (
        <div>
            <Navbar user={user}></Navbar>
            <div>
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {title}
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">{children}</div>
                    </div>
                </main>
            </div>
        </div>
    );
}
