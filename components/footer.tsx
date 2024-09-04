import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="mx-auto mt-10 mb-6 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div className="mx-auto flex flex-col p-4 text-center">
        <div className="mb-4 flex flex-row items-center justify-center space-x-10">
          <a
            href="https://github.com/dinethmeegoda"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="cursor-pointer transition-transform hover:-translate-y-2 hover:-rotate-12"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dinethmeegoda/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="cursor-pointer text-blue-500 transition-transform hover:-translate-y-2 hover:-rotate-12"
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/dinethmeegoda"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="cursor-pointer text-fuchsia-500 transition-transform hover:-translate-y-2 hover:-rotate-12"
              size={30}
            />
          </a>
        </div>
        <div className="font-bold">© 2024 Dineth Meegoda</div>
      </div>
    </footer>
  );
};

export default Footer;
