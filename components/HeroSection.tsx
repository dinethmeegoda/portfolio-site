'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="my-10 items-center justify-center py-16 text-center sm:py-20 md:space-x-4 md:py-40 md:text-left">
        <div className="flex-row md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-semibold md:mt-0 md:text-7xl">
            {' '}
            Hey, I'm Dineth!
          </h1>
          <p className="text-l mb-10 mt-4 md:text-2xl">
            I&#39;m a junior at the
            <span className="font-bold text-blue-500">
              {' '}
              University of Pennsylvania{' '}
            </span>
            majoring in{' '}
            <span className="font-bold text-pink-400 underline">
              <a href="http://cg.cis.upenn.edu/dmd.html">
                Digital Media Design
              </a>
            </span>
            , a selective interdisplinary program between Computer Science and
            Fine Arts. I love Computer Graphics and I'm currently the Events
            Chair of Penn's{' '}
            <a class="underline" href="http://cg.cis.upenn.edu/siggraph/">
              ACM SIGGRAPH
            </a>{' '}
            chapter.
          </p>
          <div className="md:mt-2 md:w-1/2">
            <Image
              className="rounded-full shadow-2xl"
              src="/headshot.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div>
        <Link
          to="projects"
          className="rounded bg-blue-600 px-6 py-3 font-semibold text-neutral-100 shadow hover:bg-blue-800"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <HiArrowDown size={35} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
