import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';

const projects = [
  {
    name: 'Sushi House',
    link: '/portfolio/sushi-house',
    image: '/portfolio-images/sushi-house/sushi-house-title.png',
    tags: ['Unreal ', 'Substance ', 'Maya'],
  },
  {
    name: 'Saul Goodman',
    link: '/portfolio/saul-goodman',
    image: '/portfolio-images/saul-goodman/saul-goodman-title.png',
    tags: ['Unreal ', 'Substance ', 'Maya'],
  },
  {
    name: 'Procedural Wall Material',
    link: '/portfolio/brick-wall-material',
    image:
      '/portfolio-images/brick-wall-material/brick-wall-material-title.png',
    tags: ['Substance Designer'],
  },
  {
    name: 'League Of Legends: Urgot',
    link: '/portfolio/urgot',
    image: '/portfolio-images/urgot/urgot-title.png',
    tags: ['Maya', 'Blender'],
  },
  {
    name: 'League Of Legends: Shen',
    link: '/portfolio/shen',
    image: '/portfolio-images/shen/shen-title.png',
    tags: ['Maya', 'Blender'],
  },
  {
    name: 'Jellyfish Simulation',
    link: '/portfolio/jellyfish',
    image: '/portfolio-images/jellyfish/jellyfish-title.png',
    tags: ['Houdini'],
  },
  {
    name: 'Trippin on Shaders',
    link: '/portfolio/shadertoy-trippin',
    image: '/portfolio-images/shadertoy-trippin/shadertoy-trippin-title.png',
    tags: ['GLSL', 'Shadertoy', 'Premiere'],
  },
  {
    name: 'Low Poly Room',
    link: '/portfolio/low-poly-room',
    image: '/portfolio-images/low-poly-room/low-poly-room-title.png',
    tags: ['Maya', 'Arnold'],
  },
  {
    name: 'Trachea',
    link: '/portfolio/trachea',
    image: '/portfolio-images/trachea/trachea-title.png',
    tags: ['Maya', 'Substance', 'Blender'],
  },
  {
    name: 'Simulation Animation',
    link: '/portfolio/simulation-animation',
    image:
      '/portfolio-images/simulation-animation/simulation-animation-title.png',
    tags: ['Illustrator', 'After Effects'],
  },
  {
    name: 'Organ Donation Animation',
    link: '/portfolio/organ-donor-animation',
    image:
      '/portfolio-images/organ-donor-animation/organ-donor-animation-title.png',
    tags: ['Animate', 'Premire'],
  },
];

const PortfolioSection = () => {
  return (
    <div className="bp-12 md:pb-40 md:pt-16">
      <h1 className="mt-32 text-center text-4xl font-bold">
        My Portfolio
        <hr className="mx-auto my-4 h-2 w-12 rounded border-0 bg-gradient-to-r from-blue-600 to-fuchsia-700"></hr>
      </h1>

      <div className="mt-12 items-center justify-center text-center">
        <div className="mx-auto grid w-2/3 grid-flow-row-dense grid-cols-1 gap-12 md:w-5/6 md:grid-cols-2 lg:w-5/6 lg:grid-cols-3">
          {projects.map((project, idx) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={project.link}>
                <div key={idx} className={`relative rounded-xl`}>
                  <SlideUp offset="-150px 0px -150px 0px">
                    <div className="animation-delay-2 animate-slideUpCubiBezier">
                      <Image
                        className="h-full w-full rounded-xl opacity-100 transition-[opacity] duration-300 ease-in-out hover:opacity-50 md:opacity-100"
                        src={project.image}
                        alt={project.name}
                        width={500}
                        height={500}
                      />
                      <div className="">
                        <h1
                          className={`mt-4 rounded-xl text-left text-3xl font-semibold dark:bg-opacity-0 max-xs:text-2xl`}
                        >
                          {project.name}
                        </h1>
                        <div className="flex flex-row space-x-1 md:space-x-4">
                          {project.tags.map((skill, idx) => {
                            // eslint-disable-next-line react/jsx-key
                            return (
                              // eslint-disable-next-line react/jsx-key
                              <div
                                key={idx}
                                className={`mt-4 rounded-xl px-4 py-2 font-semibold text-white dark:outline dark:outline-2 dark:outline-white ${
                                  idx % 2 === 0
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-700'
                                    : 'bg-gradient-to-r from-fuchsia-600 to-fuchsia-800'
                                }`}
                              >
                                {skill}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </SlideUp>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
