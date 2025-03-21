import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

export type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-background/80 border-b border-border/40">
      <Link href="/" className="text-xl font-bold">
        <span className="text-primary">Onkar</span> Waghmode
      </Link>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Button size="sm" className="hidden md:flex rounded-lg">
          Resume <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};
