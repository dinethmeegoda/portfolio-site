'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowDown, HiArrowRight } from 'react-icons/hi';

const Construction = () => {
  return (
    <section id="home">
      {/*Div that contains picture and text*/}
      <div className="mt-40 flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">
          {' '}
          This Page is Under Construction!{' '}
        </h1>
        <p className="mt-6 text-2xl font-semibold"> Come back again soon! </p>
        <div className="mt-12">
          <Image
            className="mx-auto rounded-xl shadow-2xl"
            src="/construction.png"
            alt=""
            width={1472}
            height={490}
          />
        </div>
      </div>
    </section>
  );
};

export default Construction;
