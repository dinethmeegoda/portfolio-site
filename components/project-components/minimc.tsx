import React from 'react';
import Image from 'next/image';

const MiniMC = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className="mb-6">
          {' '}
          I worked on this with{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a href="https://tlshaw.me" target="_blank" rel="noreferrer">
              Thomas Shaw
            </a>
          </span>{' '}
          and{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://kevinmasdigitalportfolio.com"
              target="_blank"
              rel="noreferrer"
            >
              Kevin Ma
            </a>
          </span>
          . I was responsible for aspects of the procedural generation,
          multithreaded terrain expansion, and weather system.
        </p>
        <p>Still working on the breakdown but here&apos;s a overview video.</p>
        <div className="mt-10 flex aspect-video flex-col">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/A2X7YN6WKVU?si=RlwNYgqt-hU6WT75"
            width="100%"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="font-style: my-4 text-center italic max-xl:text-lg max-sm:text-base xl:text-xl">
            Brief Video Overview of the project
          </p>
        </div>
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

export default MiniMC;
