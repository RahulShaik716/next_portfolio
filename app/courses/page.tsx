import T_card from "@/components/TextBookCard";
import { Bachelors, Masters, JavaScript } from "@/utils/textbooks";
import { getServerSession, NextAuthOptions } from "next-auth";
import { authOptions } from "@/utils/AuthOptions";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ data: string }>;
}) {
  const { data: param1 } = await searchParams;
  let data = Bachelors;
  if (param1 == "M") data = Masters;
  if (param1 == "J") data = JavaScript;
  const session: NextAuthOptions | null = await getServerSession(authOptions);
  if (session == null) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl">Access Denied. Please sign in.</h1>
      </div>
    );
  }
  return (
    <section
      id="courses"
      className="container flex flex-row pt-32 pb-10 gap-x-5 h-screen overflow-y-scroll"
    >
      <nav id="nav" className="flex flex-col gap-y-4 px-3">
        <Link
          href={{ pathname: "/courses", query: { data: "B" } }}
          className="hover:text-orange-400"
        >
          {`Bachelor's`}
        </Link>
        <Link
          href={{ pathname: "/courses", query: { data: "M" } }}
          className="hover:text-orange-400"
        >
          {`Master's`}
        </Link>
        <Link
          href={{ pathname: "/courses", query: { data: "J" } }}
          className="hover:text-orange-400"
        >
          Interview Prep
        </Link>
      </nav>
      <main
        className="w-full h-screen overflow-y-scroll max-w-7xl mx-auto"
        id="main"
      >
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10">
          {data.map((i) => (
            <T_card key={i.name} textbook={i} />
          ))}
        </div>
      </main>
    </section>
  );
}
