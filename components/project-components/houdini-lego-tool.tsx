import React from 'react';
import Image from 'next/image';

const Legoifier = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-xl xl:text-3xl">
        <p className="mx-6 mb-10">
          {' '}
          A Houdini tool that transforms any mesh into Lego! Allows for brick
          customization such as slope threshold, plate coverage, and brick
          resolution.
        </p>
        <p>
          Still working on the breakdown but, here&apos;s a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://github.com/dinethmeegoda/houdini-lego-generator"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
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

export default Legoifier;
