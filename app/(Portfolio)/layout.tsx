import type { Metadata } from "next";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "Rahul Shaik's Portfolio",
  description:
    "Website to introduce myself to the world and the world to introduce themselves to me.",
  keywords:
    "Full Stack Developer, JavaScript, React, Next.js, Web Development, Rahul Shaik Full Stack Developer, Rahul Shaik, Dada Rahul Teja Shaik, Rahul Shaik ASU, Rahul Shaik Shell, Rahul Shaik NRE, Rahul Shaik Next JS",
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
        <link rel="icon" href="favicon.ico" />
        <meta
          property="og:title"
          content="Rahul Shaik Portfolio - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Showcasing projects and skills of a Full Stack Developer."
        />
        <meta property="og:image" content="/hero.jpg" />
        <meta
          property="og:url"
          content="https://next-portfolio-rahulshaik716s-projects.vercel.app/"
        />
        <meta property="twitter:image" content="/hero.jpg" />
        <meta property="twitter:title" content="Rahul Shaik Portfolio" />
        <meta
          property="twitter:description"
          content="Showcasing projects and skills of a Full Stack Developer."
        />
      </head>
      <body className="overflow-y-scroll">
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
