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

export function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden" asChild>
        <button
          className="p-6 rounded-full text-white flex items-center justify-center"
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
          <ul className="flex flex-col items-center w-full gap-6 px-6 py-12">
            {routes.map(({ path, label }) => (
              <li key={path}>
              <DrawerClose asChild>
                <Button variant="link" size="sm">
                  <a className="text-2xl" href={path}>
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