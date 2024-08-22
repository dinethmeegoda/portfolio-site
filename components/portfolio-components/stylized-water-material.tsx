import React from 'react';
import Image from 'next/image';

const StylizedWater = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className="mx-6 mb-10">
          {' '}
          A procedural tilable stylized water material made in Substance
          Designer. Made to teach the basics of Substance Designer in my{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a href="http://cg.cis.upenn.edu/siggraph/">
              SIGGRAPH Chapter&apos;s
            </a>
          </span>{' '}
          workshop series.
        </p>
        <p>Still working on the breakdown but, here&apos;s a overview GIF.</p>
        <div className="mx-auto">
          <Image
            className="mx-auto mt-6"
            src="/portfolio-images/stylized-water-material/demo.gif"
            alt=""
            width={900}
            height={680}
          />
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

export default StylizedWater;
