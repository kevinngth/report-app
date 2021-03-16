import Button from "./button";

export default function NavLinks() {
    return (
        <div className="xs:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <Button href="/">Dashboard</Button>
            </div>
        </div>
    );
}
