'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowDown, HiArrowRight } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="my-10 flex flex-col items-center justify-center py-16 text-center sm:py-20 md:flex-row-reverse md:space-x-4 md:py-40 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="px-20 md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-semibold md:mt-0 md:text-5xl">
            {' '}
            Hey, I'm Dineth!
          </h1>
          <p className="mb-10 mt-4 text-2xl md:text-2xl">
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
            Fine Arts. I love Computer Graphics and I'm currently the Events
            Chair of Penn&apos;s{' '}
            <a className="underline" href="http://cg.cis.upenn.edu/siggraph/">
              ACM SIGGRAPH
            </a>{' '}
            chapter.
          </p>
          <Link
            href="/projects"
            className="inline-flex flex-row items-center gap-4 rounded bg-gradient-to-r from-blue-600 to-fuchsia-700 px-8 py-3 font-semibold text-neutral-100 shadow hover:bg-blue-800"
          >
            Projects
            <HiArrowRight />
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          onClick={(evt) => {
            evt.preventDefault();
            document
              .getElementById('demo')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <HiArrowDown size={35} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
