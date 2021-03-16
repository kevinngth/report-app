import Navbar from "./navbar";

export default function Layout({ children, title }) {
    return (
        <div>
            <Navbar></Navbar>
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
/* <header>
                {home ? (
                    <h1></h1>
                ) : (
                    <>
                        <h2>
                            <Link href="/">
                                <a>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main></main>
            {!home && (
                <div>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
       */
