import type { Metadata } from "next";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderSignIn from "@/components/Header_SigIn";
import ClientSessionProvider from "@/components/ClientSessionProvider";
export const metadata: Metadata = {
  title: "My Personal Library",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <ClientSessionProvider>
          <div className="flex flex-col justify-between">
            <HeaderSignIn />
            {children}
          </div>
        </ClientSessionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
