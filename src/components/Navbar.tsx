import DarkModeToggle from "@/components/ui/darkModeToggle"
import { Button } from "./ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Phone } from "lucide-react";

const Navbar = () => {

    const items = [
        {
            title: "Home",
            url: "#",
        },
        {
            title: "Inbox",
            url: "#",
        },
        {
            title: "Calendar",
            url: "#",
        }
    ]
    const isMobile = useIsMobile();

    return (
        <div className="absolute top-0 left-0 w-full z-10">
            {isMobile ? (
                <SidebarProvider>
                    <Sidebar>
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild>
                                                    <a className="text-xl mt-4" href={item.url}>
                                                        <span>{item.title}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                    <main>
                        <SidebarTrigger />
                    </main>
                    <Button variant="linkLight" size="sm" className="ml-auto h-fit p-4" asChild>
                        <a className="text-xl" href="/">
                            <Phone className="size-8" />
                        </a>
                    </Button>
                </SidebarProvider>
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
