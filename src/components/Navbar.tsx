import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { MenuIcon, Phone } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { useState } from "react";
import menuItems from "@/data/menu";


const Navbar = () => {
    const items = menuItems;

    const isMobile = useIsMobile();
    const [open, setOpen] = useState(false);

    return (
        <div className="absolute top-0 left-0 w-full z-10">
            <Button variant="linkLight" size="sm" className="absolute right-0 h-fit p-6 md:hidden" asChild>
                <a className="text-xl" href="/">
                    <Phone className="size-8" />
                </a>
            </Button>
            {isMobile ? (
                <Sheet open={open} onOpenChange={setOpen}>

                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden size-12 m-4">
                            <MenuIcon className="size-16" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="bg-background">
                        <div className="flex flex-col items-start pt-8">
                            {items.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="link"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <a className="text-3xl text-text font-title" href={item.url}>{item.title}</a>
                                </Button>
                            ))}
                        </div>
                    </SheetContent>

                </Sheet>
            ) : (
                <div className="flex p-4">
                    {items.map((item) => (
                        <Button key={item.title} variant="linkLight" size="sm" asChild>
                            <a className="text-xl" href={item.url}>{item.title}</a>
                        </Button>
                    ))}
                    <Button variant="linkLight" size="sm" className="ml-auto" asChild>
                        <a className="text-xl" href="/">Prenota</a>
                    </Button>
                </div>
            )}

        </div>
    );
};

export default Navbar;
