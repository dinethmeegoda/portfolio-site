'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
  {
    label: 'Portfolio',
    page: 'projects',
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 mx-auto w-full bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-stone-900 sm:px-20">
        <div className="justify-between md:flex md:items-center">
          <div className="relative z-10 flex items-center justify-between py-3">
            {/* Logo */}
            <div className="md:block md:py-5">
              <h2 className="text-3xl font-bold">Dineth Meegoda</h2>
            </div>
            {/* Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!isOpen)}>
                <div className="absolute top-7 -translate-x-7 transform">
                  <span
                    className={`absolute h-0.5 w-5 transform bg-black transition duration-300 ease-in-out dark:bg-white ${
                      isOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 transform bg-black transition-all duration-200 ease-in-out dark:bg-white ${
                      isOpen ? 'w-0 opacity-50' : 'w-5 opacity-100 delay-200'
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-5 transform bg-black transition duration-300 ease-in-out dark:bg-white ${
                      isOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
          {/* Desktop Bar*/}
          <div className={`mt-0 hidden pb-0 text-2xl md:block`}>
            <div className="flex items-center space-x-6 space-y-0">
              <Link
                href="/"
                className="lg:inLine-block block text-neutral-900 hover:text-blue-600 dark:text-neutral-100 dark:hover:text-fuchsia-500"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="lg:inLine-block block text-neutral-900 hover:text-blue-600 dark:text-neutral-100 dark:hover:text-fuchsia-500"
              >
                Projects
              </Link>
              <Link
                href="/portfolio"
                className="lg:inLine-block block text-neutral-900 hover:text-blue-600 dark:text-neutral-100 dark:hover:text-fuchsia-500"
              >
                Portfolio
              </Link>
              <button
                onClick={() => setTheme('light')}
                className="hidden rounded-xl bg-slate-100 p-2 dark:block"
              >
                <RiMoonFill size={25} color="black" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className="block rounded-xl bg-slate-100 p-2 dark:hidden"
              >
                <RiSunLine size={25} color="black" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Bar*/}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '40px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '40px', transition: { ease: 'easeIn' } }}
            className={`fixed inset-0 z-0 mt-8 flex min-h-screen flex-col items-center justify-center bg-white p-12 text-2xl dark:bg-black max-md:font-bold md:relative md:mt-0 md:hidden md:min-h-max md:pb-0`}
          >
            <div className="space-y-8 text-center">
              <Link
                href="/"
                className="lg:inLine-block block text-neutral-900 hover:text-blue-600 dark:text-neutral-100 dark:hover:text-fuchsia-500"
                onClick={() => setOpen(!isOpen)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="lg:inLine-block block text-neutral-900 hover:text-blue-600 dark:text-neutral-100 dark:hover:text-fuchsia-500"
                onClick={() => setOpen(!isOpen)}
              >
                Projects
              </Link>
              <Link
                href="/portfolio"
                className="lg:inLine-block block text-neutral-900 hover:text-blue-600 dark:text-neutral-100 dark:hover:text-fuchsia-500"
                onClick={() => setOpen(!isOpen)}
              >
                Portfolio
              </Link>
              <button
                onClick={() => setTheme('light')}
                className="hidden rounded-xl bg-slate-100 p-2 dark:inline-block"
              >
                <RiMoonFill size={25} color="black" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className="inline-block rounded-xl bg-slate-100 p-2 dark:hidden"
              >
                <RiSunLine size={25} color="black" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
