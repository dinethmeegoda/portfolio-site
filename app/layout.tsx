'use client';

import React, { useState } from 'react';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const path = usePathname();

  // when route changes, scroll to the top
  React.useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, [path]);
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
