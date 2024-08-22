import React from 'react';
import Image from 'next/image';

const FluidSim = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className="mx-6 mb-10">
          {' '}
          A lagrangian fluid simulation engine that works interactively in
          realtime. It&apos;s made with C++ and OpenGL with parallelizable
          algorithms to allow for optimization with compute shaders.
        </p>
        <p className="mx-10 mb-6">
          {' '}
          Everything was solely developed by me. However, I had a lot of
          algorithmic inspiration from Sebastian Lague&apos;s{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://www.youtube.com/watch?v=rSKMYc1CQHE&pp=ygUVc2ViYXN0aWFuIGxhZ3VlIGZsdWlk"
              target="_blank"
              rel="noreferrer"
            >
              video
            </a>
          </span>
          . His video goes over the process within Unity and C#, so I wanted to
          achieve a similar effect within my own engine in C++ and GLSL.
        </p>
        <p>
          Still working on the breakdown but here&apos;s a overview video (from
          2:44) and a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://github.com/dinethmeegoda/opengl-fluid-sim"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </span>
          .
        </p>
        <div className="mx-6 mt-10 flex aspect-video flex-col">
          <iframe
            className=" h-full w-full rounded-lg"
            src="https://player.vimeo.com/video/939052702?h=2d8c4c1ba9"
            width="100%"
            title="Vimeo video player"
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

export default FluidSim;
