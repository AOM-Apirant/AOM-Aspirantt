import NextAuth from "next-auth";

// Minimal auth config for middleware - empty providers array
// This prevents mongoose/bcryptjs from being bundled in Edge Runtime
// The auth() function only checks JWT tokens, providers are not needed for middleware
export const { auth } = NextAuth({
  providers: [], // Empty array satisfies NextAuth type requirement
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});

