'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowDown, HiArrowRight } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      {/*Div that contains picture and text*/}
      <div className="my-10 flex flex-col items-center justify-center text-center sm:mt-20 md:mt-40 md:flex-row-reverse md:space-x-4">
        {/*Picture*/}
        <div className="sm:pt-12 md:mt-2 md:w-1/2">
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
          <h1 className="mt-6 py-2 text-4xl font-semibold md:mt-0 md:text-left md:text-6xl">
            {' '}
            Hey, I&apos;m Dineth!
          </h1>
          <p className="mb-10 mt-4 text-2xl md:pr-12 md:text-left">
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
            Fine Arts. I love Computer Graphics and I&apos;m currently the
            Events Chair of Penn&apos;s{' '}
            <a className="underline" href="http://cg.cis.upenn.edu/siggraph/">
              ACM SIGGRAPH
            </a>{' '}
            chapter.
          </p>
          {/*Div that contains buttons*/}
          <div className="items-left flex flex-row space-x-4">
            <Link
              href="/resume.pdf"
              className="inline-flex w-1/2 flex-row items-center justify-between gap-4 rounded bg-gray-700 px-6 py-3 font-semibold text-neutral-100 shadow transition-[padding] duration-300 ease-in-out hover:bg-gray-600 hover:pl-8 md:w-2/5"
            >
              Resume
              <HiArrowRight />
            </Link>
            <Link
              href="/projects"
              className="inline-flex w-1/2 flex-row items-center justify-between gap-4 rounded bg-gradient-to-r from-blue-600 to-fuchsia-700 px-6 py-3 font-semibold text-neutral-100 shadow transition-[padding] duration-300 ease-in-out hover:bg-blue-800 hover:pl-8 md:w-2/5"
            >
              Projects
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </div>
      {/* Div that has arrow*/}
      <div className="flex flex-row justify-center">
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
