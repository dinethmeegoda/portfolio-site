import React from 'react';
import Image from 'next/image';

const Blame = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className="mx-6 mb-10">
          {' '}
          A procedurally built Sci-Fi scene based on the manga anthology BLAME.
        </p>
        <p className="mx-10 mb-6">
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
              href="https://artstation.com/xiaocongyan"
              target="_blank"
              rel="noreferrer"
            >
              Rain Yan
            </a>
          </span>
          . I contributed procedural materials within Substance Designer and
          integrated them within Blender along with project ideation.
        </p>
        <p>
          Still working on the breakdown but here&apos;s a overview video and a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://github.com/xcupsilon/project-blame/tree/main"
              target="_blank"
              rel="noreferrer"
            >
              Github README
            </a>
          </span>
          .
        </p>
        <div className="mt-10 flex aspect-video flex-col">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/IiXXfCsfhyw?si=162kXMxCV-GuziEc"
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

export default Blame;
