import React from 'react';
import Image from 'next/image';

const ProceduralCity = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-xl xl:text-3xl">
        <p className="mb-6 px-6">
          A pipeline through several softwares that procedurally generates a medieval city. The workflow
          included writing a wave collapse function with Python for Maya, Houdini, Substance Painter/Designer, and Unreal Engine.
          </p>
          <p>This took a group effort to get working. I was responsible for the
          chimney Houdini tool,{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a href="../portfolio/brick-wall-material">
              procedural brick wall material
            </a>
          </span>
          , packing & managing some asset textures, and input on the final
          renders and video.
        </p>
        <p>Still working on the breakdown but, here&apos;s a overview video.</p>
        <div className="mt-10 flex aspect-video flex-col">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/1XRC1sz3-N8?si=lYRz-Efxj9wB3wqh"
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

export default ProceduralCity;
