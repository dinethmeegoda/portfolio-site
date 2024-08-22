import React from 'react';
import Image from 'next/image';

const Griddle = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-xl xl:text-3xl">
        <p className="mx-6 mb-10">
          {' '}
          A Web Based Asset Database Application for 3D Artists. It's built
          around the OpenUSD (Open Universal Scene Description) framework and
          leverages asset opinions, layers, and inherits.
        </p>
        <p className="mx-6 mb-10">
          Still working on the breakdown but, here&apos;s a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://github.com/Griddle-Assets/griddle-asset-db"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </span>
          .
        </p>
        <p className="mx-6 mb-10">
          I worked on this project alongside my classmates in a Production
          Pipelines course and you can view all contributors and contributions
          in the Github Repository. I contributed the backend code and search
          functions in Python as well as some of the front end in
          React/TypeScript.
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

export default Griddle;
