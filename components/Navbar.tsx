'use client';
import React, { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

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
    label: 'About',
    page: 'about',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="fixed top-0 z-50 mx-auto w-full bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-stone-900 sm:px-20">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="md:block md:py-5">
              <h2 className="text-3xl font-bold">Dineth Meegoda</h2>
            </div>
            {/* Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                <div className="absolute top-7 -translate-x-7 transform">
                  <span
                    className={`absolute h-0.5 w-5 transform bg-black transition duration-300 ease-in-out dark:bg-white ${
                      navbar ? 'rotate-45 delay-200' : '-translate-y-1.5'
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 transform bg-black transition-all duration-200 ease-in-out dark:bg-white ${
                      navbar ? 'w-0 opacity-50' : 'w-5 opacity-100 delay-200'
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-5 transform bg-black transition duration-300 ease-in-out dark:bg-white ${
                      navbar ? '-rotate-45 delay-200' : 'translate-y-1.5'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 text-2xl md:mt-0 md:block md:pb-0
                ${
                  navbar
                    ? 'block translate-y-full transform font-bold transition-all delay-100 duration-300'
                    : 'hidden'
                }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return [
                  <Link
                    key={idx}
                    to={item.page}
                    className="lg:inLine-block block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>,
                ];
              })}
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
      </div>
    </header>
  );
};

export default Navbar;
