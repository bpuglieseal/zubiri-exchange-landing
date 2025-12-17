import Button from "./button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-[rgba(255,255,255,0.8)] hover:text-[rgba(255,255,255,1)] transition-colors"
    >
      {children}
    </a>
  );
};

const ResponsiveNavBar = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="block md:hidden w-fit">
          <Button type="icon">
            <Menu className="w-6 h-6 text-white cursor-pointer" />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-transparent backdrop-blur-xs">
        <DrawerDescription>
          <nav className="pt-8 pb-5">
            <ul className="flex flex-col space-y-8 items-center">
              <li className="text-white">
                <a href="#" className="text-md">
                  Overview
                </a>
              </li>
              <li className="text-white">
                <a href="#" className="text-md">
                  Benefits
                </a>
              </li>
              <li className="text-white">
                <a href="#" className="text-md">
                  Features
                </a>
              </li>
            </ul>
          </nav>
        </DrawerDescription>
        <DrawerFooter>
          <Button>Get Started</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default function Header() {
  return (
    <header className="p-4 bg-dark text-white py-6 md:px-16 px-5 border-b border-b-border-header">
      <div className="flex flex-row justify-between items-center mx-auto xl:max-w-6xl">
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center gap-3">
            <img
              src="/zubiri-exchange-landing/logo.png"
              alt="Zubiri Exchange Logo"
              className="w-9 h-9 rounded-xl md:w-12 md:h-12"
            />
            <h2 className="text-xl md:text-2xl font-medium">Zubiri Exchange</h2>
          </div>
          <div className="hidden md:block">
            <nav>
              <ul className="flex flex-row items-center space-x-3.5">
                <li>
                  <NavLink href="#">Overview</NavLink>
                </li>
                <li>
                  <NavLink href="#">Benefits</NavLink>
                </li>
                <li>
                  <NavLink href="#">Features</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ResponsiveNavBar />
        <div className="flex-row items-center gap-5 hidden md:flex">
          <NavLink href="#">Contact Us</NavLink>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
