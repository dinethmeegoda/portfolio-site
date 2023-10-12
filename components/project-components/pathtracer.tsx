import React from 'react';
import Image from 'next/image';

const PathTracer = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 px-6 text-center text-3xl">
        <p>
          A Monte-Carlo path tracing engine implemented in C++ and GLSL. This engine implements Multiple Importance Sampling, Area, Point, and Environment Lights, Dielectric and Tranmissive Materials, and Custom Scene Creation. Stay tuned for the breakdown!
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

export default PathTracer;
