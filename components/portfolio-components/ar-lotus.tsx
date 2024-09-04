import React from 'react';
import Image from 'next/image';

const ARLotus = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className="mx-6 mb-10">
          {' '}
          An AR intervenion exhibit that symbolizes the British Colonization of
          Sri Lanka. It's made and animated in Blender and using USD to generate
          the AR sculpture in the real world.
        </p>
        <p>
          Still working on the breakdown but, here&apos;s a video demo captured
          in the British Museum in London!
        </p>
        <div className="mt-10 flex aspect-video flex-col">
          <video className="mx-auto" width="400" controls>
            <source
              src="/portfolio-images/ar-lotus/demo.mp4"
              type="video/mp4"
            />
          </video>
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

export default ARLotus;
