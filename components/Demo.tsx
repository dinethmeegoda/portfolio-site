'use client';
import React from 'react';
import { CSSProperties } from 'react';

const skills = [
  { skill: 'C++' },
  { skill: 'Python' },
  { skill: 'Unreal Engine' },
  { skill: 'OpenGL' },
  { skill: 'Unity' },
  { skill: 'C#' },
  { skill: 'Houdini' },
  { skill: 'VEX' },
  { skill: 'Autodesk Maya' },
  { skill: 'ZBrush' },
  { skill: 'WebGL' },
  { skill: 'Substance Painter' },
  { skill: 'React' },
  { skill: 'Substance Designer' },
  { skill: 'Perforce' },
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
        <div className="justify-left flex flex-col items-stretch space-y-10 py-8 align-top lg:space-y-0 lg:text-left ">
          <div className="grid grid-flow-row-dense grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <div className="">
                <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
                  {' '}
                  Tech Art - Env Tools Reel
                </h1>
              </div>
              <div className="aspect-video">
                <iframe
                  className=" h-full w-full rounded-lg"
                  src="https://player.vimeo.com/video/875878258?h=1a5120b316"
                  width="100%"
                  title="Vimeo video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <div className="">
                <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
                  {' '}
                  Tech Art - Rigging Reel
                </h1>
              </div>
              <div className=" aspect-video">
                <iframe
                  className=" h-full w-full rounded-lg"
                  src="https://player.vimeo.com/video/884628104?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                  width="100%"
                  title="Vimeo video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <div className="">
                <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
                  {' '}
                  TD/CG Generalist Reel
                </h1>
              </div>
              <div className=" aspect-video">
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
          </div>
        </div>
        <div className="">
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
    </section>
  );
};

export default Demo;
