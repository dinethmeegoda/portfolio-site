import React from 'react';
import Image from 'next/image';

const SushiHouse = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className='mb-10 mx-6'> A fantasy environment created by solely me in Unreal Engine, Substance Painter, ZBrush, and Maya. Responsible for all aspects except for skybox.</p>
        <p>Still working on the breakdown but, here&apos;s a overview video.</p>
        <div className="mt-10 flex aspect-video flex-col">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/_GTNf0c-5mQ?si=xHO8QyY1TWxmR1ET"
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

export default SushiHouse;
