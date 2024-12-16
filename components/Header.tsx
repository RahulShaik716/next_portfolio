"use client";
import { Github, Menu, Linkedin } from "@geist-ui/icons";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="fixed z-10 w-full mx-auto flex justify-between border-b p-2 bg-background text-foreground opacity-100 items-center">
      <Link href="/">
        <h1> {`Rahul Shaik Portfolio`} </h1>
      </Link>
      <nav className="flex gap-x-2">
        <ul className="hidden lg:flex flex-row gap-x-1">
          {/* <Link href="courses" className="border-r px-2 py-1">
              Courses
            </Link> */}
          <Link
            href="#workexperience"
            className="hover:border-b border-foreground px-2 py-1"
          >
            Work Experience
          </Link>
          <Link
            href="#projects"
            className="hover:border-b border-foreground px-2 py-1"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="hover:border-b border-foreground px-2 py-1"
          >
            Skills
          </Link>
          <Link
            href="#testimonials"
            className="hover:border-b border-foreground px-2 py-1"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="hover:border-b border-foreground px-2 py-1"
          >
            Contact
          </Link>
        </ul>
        <div className="lg:hidden flex flex-row gap-x-1 items-center">
          <Link
            href="https://www.linkedin.com/in/rahul-shaik/"
            className="px-2"
          >
            <Linkedin />
          </Link>
          <Link href="https://github.com/RahulShaik716" className="px-2">
            <Github />
          </Link>
          <Menu onClick={() => setShow(() => !show)} />
        </div>
        {show && (
          <ul className="flex flex-col gap-y-1 absolute top-10 right-0 bg-background z-5 lg:hidden">
            <Link
              href="courses"
              onClick={() => setShow(false)}
              className="px-2 py-1"
            >
              Courses
            </Link>
            <Link
              href="#workexperience"
              onClick={() => setShow(false)}
              className="px-2 py-1"
            >
              Work Experience
            </Link>
            <Link
              href="#projects"
              onClick={() => setShow(false)}
              className="px-2 py-1"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              onClick={() => setShow(false)}
              className="px-2 py-1"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              onClick={() => setShow(false)}
              className="px-2 py-1"
            >
              Contact Me
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
}
