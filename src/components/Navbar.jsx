import Link from "next/link";
import { ThemeToggle } from "@/components/Theme-toggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors"
          >
            Home
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
