'use client';

import React, { useState } from 'react';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();

  // when route changes, scroll to the top
  React.useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, [router.pathname]);
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
