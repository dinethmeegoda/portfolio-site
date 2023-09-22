'use client';
import React from 'react';
import { CSSProperties } from 'react';

const skills = [
  { skill: 'C++' },
  { skill: 'Unreal Engine' },
  { skill: 'OpenGL' },
  { skill: 'Unity' },
  { skill: 'C#' },
  { skill: 'Houdini' },
  { skill: 'VEX' },
  { skill: 'Autodesk Maya' },
  { skill: 'Python' },
  { skill: 'ZBrush' },
  { skill: 'WebGL' },
  { skill: 'Substance Painter' },
  { skill: 'React' },
  { skill: 'Substance Designer' },
  { skill: 'Next.js' },
  { skill: 'Premiere Pro' },
  { skill: 'Tailwind CSS' },
  { skill: 'Illustrator' },
  { skill: 'Javascript/Typescript' },
  { skill: 'Photoshop' },
];

const Demo = () => {
  return (
    <section id="demo">
      <div className="bp-12 md:pb-40 md:pt-16">
        <h1 className="mt-32 text-center text-4xl font-bold">
          What Do I Do?
          <hr className="mx-auto my-4 h-2 w-12 rounded border-0 bg-gradient-to-r from-blue-600 to-fuchsia-700"></hr>
        </h1>
        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-2/3">
            <h1 className="mb-6 text-center text-2xl font-bold sm:my-8 md:text-left">
              {' '}
              Demo Reel
            </h1>
            <div className=" aspect-video ">
              <iframe
                className=" h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/LETSDF6VsEc?si=o0qe74Jb1AKCcJPU"
                width="100%"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/3">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              My Skills
            </h1>
            <div className="flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    /* animation doesnt work rn*/
                    className={`mr-2 mt-2 rounded px-4 py-2 font-semibold text-white [animation:appear_.4s_ease-out_var(--appear-delay)_1_normal_backwards] ${
                      idx % 2 === 0
                        ? 'bg-gradient-to-r from-blue-500 to-blue-700'
                        : 'bg-gradient-to-r from-fuchsia-600 to-fuchsia-800'
                    }`}
                    style={
                      { '--appear-delay': `${idx * 150}ms` } as CSSProperties
                    }
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
