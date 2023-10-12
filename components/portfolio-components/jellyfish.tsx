import React from 'react';
import Image from 'next/image';

const JellyFish = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className='mb-10 mx-6'> A procedural Jellyfish simulation made in Houdini. 
        Used Vellum hair and cloth simulations and procedural modelling to non-destructively build a Jellyfish.
        </p>
        <p>Still working on the breakdown but, here&apos;s a overview GIF.</p>
        <div className="mx-auto">
        <Image
                className="mx-auto mt-6"
                src="/portfolio-images/jellyfish/stylizedJelly720.gif"
                alt=""
                width={500}
                height={500}
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

export default JellyFish;
