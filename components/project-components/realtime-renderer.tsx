import React from 'react';
import Image from 'next/image';

const RealTime = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 px-6 text-center text-3xl">
        <p>
          A realtime rendering engine that implements PBR, GGX Importance Sampling, Environment Light Mapping, and Displacement/Normal maps. Implemented with C++ and GLSL. Stay tuned for the breakdown!
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

export default RealTime;
