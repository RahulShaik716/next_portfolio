import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rahul Shaik's Portfolio",
  description:
    "Website to introduce myself to the world and the world to introduce themselves to me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="fixed z-1 w-full mx-auto flex justify-between border-b p-2 bg-white opacity-100">
          <Link href="/">
            <h1> {`Rahul's Shaik Portfolio`} </h1>
          </Link>
          <nav className="flex gap-x-2">
            <ul className="hidden lg:flex flex-row gap-x-1">
              <Link href="courses" className="border-r px-2 py-1">
                Courses
              </Link>
              <Link href="#workexperience" className="border-r px-2 py-1">
                Work Experience
              </Link>
              <Link href="#projects" className="border-r px-2 py-1">
                Projects
              </Link>
              <Link href="#skills" className="border-r px-2 py-1">
                Skills
              </Link>
              <Link href="#contact" className="border-r px-2 py-1">
                Contact Me
              </Link>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
