'use client';

import React, { useState } from 'react';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navbarOpen, setNavbarOpen] = useState(false);
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
