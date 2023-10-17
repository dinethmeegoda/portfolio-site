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
        <div className="flex flex-col items-stretch justify-center space-y-10 align-top lg:flex-row lg:space-x-10 lg:space-y-0 lg:p-4 lg:text-left">
          <div className="lg:w-2/3">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              {' '}
              Demo Reel
            </h1>
            <div className=" aspect-video ">
              <iframe
                className=" h-full w-full rounded-lg"
                src="https://player.vimeo.com/video/873559883?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                width="100%"
                title="Vimeo video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/3">
            <h1 className="mb-6 text-center text-2xl font-bold lg:text-left">
              My Skills
            </h1>
            <div className="flex flex-row flex-wrap justify-center lg:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={item.skill}
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
