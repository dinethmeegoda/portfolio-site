import React from 'react';
import Image from 'next/image';

const MiniMaya = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 px-6 text-center text-3xl">
        <p>
          A 3D modelling tool implemented completely from C++ and GLSL. 
          Implements mesh operations such as Catmull-Clark subdivision, 
          triangulation, vertex deformation, and edge splitting. Also 
          supports basic mesh skinning and mesh deformation through importing skeletons. 
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

export default MiniMaya;
