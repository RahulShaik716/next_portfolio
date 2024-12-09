import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rahul Shaik's Portfolio",
  description:
    "Website to introduce myself to the world and the world to introduce themselves to me.",
  keywords: "Full Stack Developer, JavaScript, React, Next.js, Web Development",
  authors: [{ name: "Dada Rahul Teja Shaik" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon_new.jpg" />
        <meta
          property="og:title"
          content="Rahul Shaik Portfolio - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Showcasing projects and skills of a Full Stack Developer."
        />
        <meta property="og:image" content="favicon_new.jpg" />
        <meta
          property="og:url"
          content="https://next-portfolio-rahulshaik716s-projects.vercel.app/"
        />
      </head>
      <body>
        <header className="fixed z-10 w-full mx-auto flex justify-between border-b p-2 bg-white opacity-100">
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
            <ul className="flex flex-col gap-y-1 absolute lg:hidden">
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
