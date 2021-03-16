import Brand from "./brand";
import NavLinks from "./navlinks";
import UserMenu from "./userMenu";

export default function Navbar({ user }) {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Brand />
                        <NavLinks />
                    </div>
                    <div className="xs:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <div className="ml-3 relative">
                                <UserMenu user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
