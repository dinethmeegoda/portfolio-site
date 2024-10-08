import React from 'react';
import Image from 'next/image';

const StylizedBeach = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className="mx-6 mb-10">
          {' '}
          An Interactive Unity Scene created solely by me to explore real-time
          stylized shading techniques. I used HLSL, Substance Designer, Maya,
          and ZBrush to create the final look.
        </p>
        <p>
          Still working on the breakdown but, here&apos;s a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://github.com/dinethmeegoda/unity-stylization"
              target="_blank"
              rel="noreferrer"
            >
              Github README
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

export default StylizedBeach;
