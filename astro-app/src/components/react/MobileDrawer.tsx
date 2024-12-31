import { Menu } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerClose,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';
import { routes } from '@/routes/routes';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer when navigating
  useEffect(() => {
    const handleNavigation = () => {
      setIsOpen(false);
    };

    document.addEventListener('astro:after-navigation', handleNavigation);
    return () => document.removeEventListener('astro:after-navigation', handleNavigation);
  }, []);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="md:hidden" asChild>
        <button
          className="flex items-center justify-center rounded-full p-6 text-white"
          aria-label="Toggle menu"
        >
          <Menu size={40} />
        </button>
      </DrawerTrigger>
      <DrawerHeader className="hidden">
        <DrawerTitle>Menu</DrawerTitle>
        <DrawerDescription>Choose an option below.</DrawerDescription>
      </DrawerHeader>
      <DrawerContent>
        <ul className="flex w-full flex-col items-center gap-16 px-6 pb-32 pt-20">
          {routes.map(({ path, label }) => (
            <li key={path}>
              <DrawerClose asChild>
                <Button variant="link" size="sm">
                  <a className="font-title text-4xl" href={path}>
                    {label}
                  </a>
                </Button>
              </DrawerClose>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
