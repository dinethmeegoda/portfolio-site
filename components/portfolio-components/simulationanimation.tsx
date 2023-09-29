import React from 'react';
import Image from 'next/image';

const SimulationAnimation = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p>Still working on the breakdown but, here&apos;s a overview video.</p>
        <div className="mt-10 flex aspect-video flex-col">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/39b1uFt9Jao?si=DHBhFHgSSIss48VY"
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

export default SimulationAnimation;
