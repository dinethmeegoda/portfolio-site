import React from 'react';
import Image from 'next/image';

const CrowdSim = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className="mx-6 mb-10">
          {' '}
          A tool for Maya that instances a supplied character, obstacles, and
          inflow(s)/outflow(s) to create a crowd simulation. The simulation
          remains interactive and allows for manipulation of the obstacles and
          parameters to trigger a recompute. In addition to the plugin, there is
          an interactive OpenGL engine that allows the crowds to be interacted
          with.
        </p>
        <p className="mx-10 mb-6">
          {' '}
          I worked on this with{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a href="https://tlshaw.me" target="_blank" rel="noreferrer">
              Thomas Shaw
            </a>
          </span>{' '}
          taking inspiration from this paper by{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://developer.download.nvidia.com/presentations/2009/GDC/MultiAgentGPU.pdf"
              target="_blank"
              rel="noreferrer"
            >
              NVIDIA
            </a>
          </span>
          . I contributed mainly to the Engine Obstacle & Scene setup,
          visibility graph calculation, Maya Tool interface in PyQt, and Some
          Maya Plugin Setup & integration.
        </p>
        <p>
          Still working on the breakdown but here&apos;s a overview video and a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://github.com/printer83mph/maya-pathfinding"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </span>
          .
        </p>
        <div className="mt-10 flex aspect-video flex-col">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/FvAHNs3ueOw?si=LxNjjE8juGue-zyq"
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

export default CrowdSim;
