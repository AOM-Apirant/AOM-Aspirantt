import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: 'AOM Aspirant - Quiz App',
  description: 'A modern quiz application for AOM aspirants with Next.js and TypeScript',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${poppins.className} antialiased`} suppressHydrationWarning={true}>
        <SessionProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          </SessionProvider>
      </body>
    </html>
  );
}