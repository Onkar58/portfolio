import { FC } from "react";

export type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Onkar Waghmode. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Built with ❤️ using Next.js, Framer Motion & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
