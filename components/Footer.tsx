import Link from "next/link";
import { Github, Linkedin, Mail } from "@geist-ui/icons";
export default function Footer() {
  return (
    <div className="fixed bottom-0  w-full hidden lg:flex flex-row justify-between bg-background border-t z-10 p-2 items-center">
      <div>
        &copy; {new Date().getFullYear().toString()} Rahul Shaik . All Rights
        Reserved.
      </div>
      <div className="flex flex-row gap-x-3 items-center">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/rahul-shaik/"
          className="px-3"
        >
          <Linkedin />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/RahulShaik716"
          className="px-3"
        >
          <Github />
        </Link>
        <Link href={`mailto:${process.env.EMAIL}`} className="px-3">
          <Mail />
        </Link>
      </div>
    </div>
  );
}
