import { ArrowRight } from "@geist-ui/icons";
import Link from "next/link";
import Image from "next/image";
import { getProfile } from "@/db/db";

type Profile = {
  name: string;
  role: string;
  Tagline: string;
  profile_image: string;
  description: string;
  event_message?: string;
};

export default async function Hero() {
  const profiles = await getProfile();
  const profile = profiles?.[0] as Profile;

  return (
    <div
      id="hero"
      className="py-20 h-screen container max-w-7xl text-center flex flex-col justify-center mx-auto"
    >
      <h1 className="text-4xl font-bold mb-4">{profile.name}</h1>
      <p className="text-xl mb-8 animate-fade-in animation-delay-200 font-semibold">
        {profile.role}
      </p>
      <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold">
        {profile.Tagline}
      </p>
      <button className="animate-fade-in animation-delay-500">
        <Link
          href="#contact"
          className="inline-flex items-center bg-foreground text-background px-6 py-2 rounded-md"
        >
          Get in touch &nbsp; <ArrowRight />
        </Link>
      </button>
      <div className="self-center flex flex-col md:flex-row mt-6 justify-center items-center gap-2">
        <Image
          src={profile.profile_image}
          alt="display picture"
          width={1080}
          height={1080}
          className="rounded-full w-32 h-32 object-cover"
          priority
          fetchPriority="high"
          unoptimized
        />
        <p className="leading-relaxed text-pretty max-w-[66ch]">
          {profile.description}
        </p>
      </div>
      {profile.event_message && (
        <p className="text-green-700 mt-4 font-bold animate-pulse">
          {profile.event_message}
        </p>
      )}
    </div>
  );
}
