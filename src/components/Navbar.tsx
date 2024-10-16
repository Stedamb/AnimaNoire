import DarkModeToggle from "@/components/ui/darkModeToggle"
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 w-full z-10">
            <div className="flex p-4">
                <Button variant="linkLight" size="sm" asChild>
                    <a className="text-xl" href="/">Home</a>
                </Button>
                <Button variant="linkLight" size="sm" asChild>
                    <a className="text-xl" href="/">Artisti</a>
                </Button>
                <Button variant="linkLight" size="sm" asChild>
                    <a className="text-xl" href="/">Contatti</a>
                </Button>
                <Button variant="linkLight" size="sm" className="ml-auto" asChild>
                    <a className="text-xl" href="/">Prenota</a>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
