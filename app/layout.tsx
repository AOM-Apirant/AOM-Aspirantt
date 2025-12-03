import './globals.css';

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
          {children}
      </body>
    </html>
  );
}