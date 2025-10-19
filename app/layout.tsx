import Navbar from '@/components/Navbar';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/Footer';
import FloatingTopicNavigator from '@/components/FloatingTopicNavigator';

export const metadata = {
  title: 'AOM Aspirant',
  description: 'Your gateway to become AOM',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className="antialiased" suppressHydrationWarning={true}>
        <SessionProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
            <FloatingTopicNavigator />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}