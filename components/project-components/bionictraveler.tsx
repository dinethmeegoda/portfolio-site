import React from 'react';
import Image from 'next/image';

const BionicTraveler = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p>
          Still working on the breakdown but, here&apos;s a overview video.{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a href="https://store.steampowered.com/app/2026430/UPGRADE_202122__Bionic_Traveler/">
              Click here
            </a>
          </span>{' '}
          for the Steam page!
        </p>

        <div className="mt-10 flex aspect-video flex-col">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/GI6Cu_mn7VM?si=QrUFI2g6ZW7MWfwk"
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

export default BionicTraveler;
