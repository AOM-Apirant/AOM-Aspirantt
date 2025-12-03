import NextAuth from "next-auth";

// Minimal auth config for middleware - no providers, just session checking
// This prevents mongoose/bcryptjs from being bundled in Edge Runtime
export const { auth } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});

