"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function HeaderSignIn() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <header className="fixed flex flex-row w-full z-20 bg-white py-4 justify-between items-center mr-2 background-blur-md shadow-lg">
      <div className="font-bold text-2xl ml-4">Rahul Shaik Digital Library</div>
      {session == null ? (
        <button
          onClick={() => signIn("google")}
          className="p-2 rounded-lg mr-4"
        >
          SignIn
        </button>
      ) : (
        <div className="flex flex-row gap-x-2 mr-4 items-center">
          <Image
            src={session.user.image}
            width={64}
            height={64}
            alt="user image"
            className="w-10 h-10 object-fit rounded-full"
            unoptimized
          />
          <button onClick={() => signOut()}>SignOut</button>
        </div>
      )}
    </header>
  );
}
