import Navbar from '@/components/Navbar';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AOM Aspirant',
  description: 'Your gateway to become AOM',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        <SessionProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}