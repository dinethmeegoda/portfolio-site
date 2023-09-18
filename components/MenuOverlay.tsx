import React from 'react';

const MenuOverlay = ({
  navbarOpen,
  setNavbarOpen,
}: {
  navbarOpen: any;
  setNavbarOpen: any;
}) => {
  return (
    <nav
      className={`fixed left-0 top-0 z-10 flex h-screen w-full transform bg-gray-900 bg-opacity-100 p-10 pt-24 text-white transition-all delay-100 duration-300 ${
        navbarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <ul className="flex w-full flex-col items-start">
        <li className="nav-li">
          <a
            href="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-li">
          <a
            href="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
