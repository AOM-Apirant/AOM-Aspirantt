import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Use dynamic imports with function to avoid webpack static analysis
          // This prevents Mongoose from being bundled in Edge Runtime
          const dbModule = await import("./db");
          const userModule = await import("@/models/User");
          const bcryptModule = await import("bcryptjs");
          
          const connectDB = dbModule.default;
          const User = userModule.default;
          const bcrypt = bcryptModule.default || bcryptModule;

          await connectDB();
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            return null;
          }

          if (user.password) {
            const isValid = await bcrypt.compare(
              credentials.password as string,
              user.password as string
            );
            if (!isValid) {
              return null;
            }
          } else {
            return null;
          }
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl + "/quiz";
    },
    async session({ session, token }) {
      if (token && token.sub) {
        session.user.id = token.sub;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});

