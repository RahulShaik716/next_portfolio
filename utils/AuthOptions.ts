import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.sub || "",
      };
      return session;
    },
    async signIn({ user }) {
      if (user.email?.startsWith("jameeulla3")) {
        return true; // Allow sign-in
      }
      return false; // Deny sign-in
    },
    async jwt({ token, account }) {
      if (account?.provider === "google") {
        token.providerAccountId = account.providerAccountId;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
