import React from 'react';
import Image from 'next/image';

const Fireball = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
      <p className='mb-10 mx-6'> A WebGL stylized procedural fireball shader that implements toon shading by recalculating deformed normals based on vertex shader manipulation.</p>
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
        <Image
          className="mx-auto mt-10 rounded-xl shadow-2xl"
          src="/constructionMonkey.png"
          alt=""
          width={1472}
          height={490}
        />
      </div>
    </section>
  );
};

export default Fireball;
