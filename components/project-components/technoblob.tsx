import React from 'react';
import Image from 'next/image';

const Technoblob = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-xl xl:text-3xl">
      <p className='mb-10 mx-6'> A fun dive into creating noise based vertex and frag shaders in WebGL to deform a sphere into a something more interesting.</p>
        <p>
          Still working on the breakdown but, here&apos;s a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://dinethmeegoda.github.io/Intro-WebGL-Shader/"
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

export default Technoblob;
