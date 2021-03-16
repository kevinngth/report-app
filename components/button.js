import Link from "next/link";

export default function Button({ children, href }) {
    return (
        <Link href={href}>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {children}
            </a>
        </Link>
    );
}
