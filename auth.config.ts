import type { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user }) {
      return session;
    },
    async jwt({ token, user }) {
      return token;
    },
  },
  providers: [],
};
