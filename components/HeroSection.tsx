'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowDown, HiArrowRight } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      {/*Div that contains picture and text*/}
      <div className="my-10 flex flex-col items-center justify-center text-center xs:mt-20 lg:mt-40 lg:flex-row-reverse lg:space-x-4">
        {/*Picture*/}
        <div className="pt-12 md:mt-2 md:w-1/2">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        {/*Name Title Text*/}
        <div className="px-5 md:mt-2 md:w-3/5">
          <h1 className="mt-6 py-2 text-left text-4xl font-semibold lg:mt-0 lg:text-5xl">
            {' '}
            Hey, I&apos;m Dineth!
          </h1>
          <p className="mb-6 mt-4 text-left lg:pr-12 lg:text-2xl">
            I&#39;m a junior at the
            <span className="font-bold text-blue-500">
              {' '}
              University of Pennsylvania{' '}
            </span>
            majoring in{' '}
            <span className="font-bold text-fuchsia-500 underline">
              <a href="http://cg.cis.upenn.edu/dmd.html">
                Digital Media Design
              </a>
            </span>
            , a selective interdisplinary program between Computer Science and
            Fine Arts. I&apos;m also a teaching assistant for Penn&apos;s
            Interactive Computer Graphics Class and currently the Events Chair
            of Penn&apos;s{' '}
            <a className="underline" href="http://cg.cis.upenn.edu/siggraph/">
              ACM SIGGRAPH
            </a>{' '}
            chapter.
          </p>
          <p className="mb-6 mt-4 text-left lg:pr-12 lg:text-2xl">
            I&apos;m especially interested in proceduralism and playing with
            realism and stylization when it comes to creating and recreating
            worlds within games and animation.
          </p>
          {/*Div that contains buttons*/}
          <div className="items-left flex flex-row space-x-4">
            <Link
              href="https://drive.google.com/file/d/179LpsuRJuVi3jLxsa9BQOGWvJ0ifoCfT/view?usp=sharing"
              target="_blank"
              className="inline-flex w-1/2 flex-row items-center justify-between gap-4 rounded bg-gray-700 px-6 py-3 font-semibold text-neutral-100 shadow transition-[padding] duration-300 ease-in-out hover:bg-gray-600 hover:pl-8 md:w-2/5"
            >
              Resume
              <HiArrowRight />
            </Link>
            <Link
              href="/"
              className="inline-flex w-1/2 flex-row items-center justify-between gap-4 rounded bg-gradient-to-r from-blue-600 to-fuchsia-700 px-6 py-3 font-semibold text-neutral-100 shadow transition-[padding] duration-300 ease-in-out hover:bg-blue-800 hover:pl-8 md:w-2/5"
            >
              Projects
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </div>
      {/* Div that has arrow*/}
      <div className="mt-32 flex flex-row justify-center max-sm:hidden">
        <button
          onClick={(evt) => {
            evt.preventDefault();
            document
              .getElementById('demo')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
