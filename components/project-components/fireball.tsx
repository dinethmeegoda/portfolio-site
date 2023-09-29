import React from 'react';
import Image from 'next/image';

const Fireball = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p>
          Still working on the breakdown but, here&apos;s a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://dinethmeegoda.github.io/procedural-fireball/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default Fireball;
