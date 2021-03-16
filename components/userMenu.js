import Button from "./button";

export default function UserMenu({ user }) {
    return (
        <div className="flex items-center px-5">
            <div className="mx-3">
                <div className="text-base font-medium leading-none text-white">
                    {user?.username}
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                    {user && (user.isAdmin ? "Admin" : "Normal")}
                </div>
            </div>
            {user ? (
                <Button href="/user/logout">Log Out</Button>
            ) : (
                <Button href="/user/login">Login/Register</Button>
            )}
        </div>
    );
}
