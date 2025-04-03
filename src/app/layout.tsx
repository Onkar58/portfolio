import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Portfolio | Onkar58",
  description: "Welcome to the Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark selection:bg-[#dee2e6]  selection:text-black"
    >
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
