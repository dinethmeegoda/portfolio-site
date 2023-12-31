import React from 'react';
import Image from 'next/image';

const Saul = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-3xl">
        <p className='mb-10 mx-6'> A character model created by solely me in Unreal Engine, Substance Painter, ZBrush, and Maya. Responsible for all aspects except for eyeball material.</p>
        <p>
          Still working on the breakdown but, here&apos;s a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://www.artstation.com/artwork/blKOkn"
              target="_blank"
              rel="noreferrer"
            >
              Artstation Highlight
            </a>
          </span>
          .
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

export default Saul;
