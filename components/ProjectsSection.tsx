import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';

const projects = [
  {
    name: 'VR Mesh Tool',
    link: '/projects/vr-mesh-cut',
    image: '/projects-images/vr-mesh/vr-mesh-title.png',
    description:
      'A tool built for Unity that procedurally creates real-time mesh cuts on models.',
    tags: ['C# ', 'Unity ', 'Oculus'],
  },
  {
    name: 'Real-Time Fluid Sim Engine',
    link: '/projects/fluid-sim-engine',
    image: '/projects-images/fluid-sim-engine/fluid-sim-engine-title.png',
    description: 'A Parallelizable Physics Particle Based Engine.',
    tags: ['C++ ', 'GLSL', 'OpenGL'],
  },
  {
    name: 'Maya Crowd Sim Plugin & Engine',
    link: '/projects/maya-crowd-sim',
    image: '/projects-images/maya-crowd-sim/maya-crowd-sim-title.png',
    description: 'A tool built for Maya along with a OpenGL Crowd Sim Engine.',
    tags: ['C++ ', 'Python ', 'Maya'],
  },
  {
    name: 'Legoifier Tool',
    link: '/projects/houdini-lego-tool',
    image: '/projects-images/houdini-lego-tool/houdini-lego-tool-title.png',
    description: 'A houdini tool that transforms any mesh to LEGO.',
    tags: ['Houdini ', 'VEX '],
  },
  {
    name: 'VR Grappler',
    link: '/projects/vr-grappler',
    image: '/projects-images/vr-grappler/vr-grappler-title.png',
    description: 'A physics-based prototype based on real-time swinging.',
    tags: ['Unity ', 'OpenXR ', 'C#'],
  },
  {
    name: 'USD Griddle',
    link: '/projects/griddle',
    image: '/projects-images/griddle/griddle-title.png',
    description: 'A web-based USD Database for 3D Artists.',
    tags: ['USD ', 'Python ', 'FastAPI'],
  },
  {
    name: 'Mini Minecraft',
    link: '/projects/mini-minecraft',
    image: '/projects-images/mini-minecraft/mini-minecraft-title.png',
    description: 'Multithreaded Voxel Based Engine.',
    tags: ['C++', 'OpenGL', 'GLSL'],
  },
  {
    name: 'Path Tracer',
    link: '/projects/pathtracer',
    image: '/projects-images/path-tracer/path-tracer-title.png',
    description:
      'Monte-Carlo Pathtracer with MIS, Scene Creation, and Materials.',
    tags: ['GLSL', 'OpenGL', 'C++'],
  },
  {
    name: 'Procedural City',
    link: '/projects/procedural-city',
    image: '/projects-images/procedural-city/procedural-city-title.png',
    description:
      'Procedurally Built Medieval City using Wave Function Collapse.',
    tags: ['Unreal', 'Houdini', 'Python'],
  },
  {
    name: 'Real-Time Renderer',
    link: '/projects/realtime-renderer',
    image: '/projects-images/realtime-renderer/realtime-renderer-title.png',
    description:
      'Real-time Rendering Engine implementing PBR surfaces, reflections, and HDRIs.',
    tags: ['GLSL', 'OpenGL'],
  },
  {
    name: 'Mini Maya',
    link: '/projects/mini-maya',
    image: '/projects-images/mini-maya/mini-maya-title.png',
    description:
      '3D Modelling Program that implements subdivision, skinning, and USD exports.',
    tags: ['C++', 'OpenGL', 'Qt'],
  },
  {
    name: 'Bionic Traveler',
    link: '/projects/bionic-traveler',
    image: '/projects-images/bionic-traveler/bionic-traveler-title.png',
    description: '2D RPG published on Steam made with UPGRADE@Penn.',
    tags: ['Unity', 'Photoshop'],
  },
  {
    name: 'WebGL Procedural Fireball',
    link: '/projects/webGL-fireball',
    image: '/projects-images/webgl-fireball/webgl-fireball-title.png',
    description: 'Procedurally generated fireball character.',
    tags: ['WebGL', 'GLSL'],
  },
  {
    name: 'WebGL Procedural Technoblob',
    link: '/projects/webGL-procedural-blob',
    image: '/projects-images/webgl-blob/webgl-blob-title.png',
    description: 'Procedurally generated noise-function dense blob.',
    tags: ['WebGL', 'GLSL'],
  },
  {
    name: 'Portfolio Site',
    link: '/projects/portfolio-site',
    image: '/projects-images/portfolio-site/portfolio-site-title.png',
    description: 'Personal Portfolio Site (So Meta).',
    tags: ['React', 'Tailwind', 'Next.js'],
  },
  {
    name: 'SDF Engine',
    link: '/projects/sdf-mogus',
    image: '/projects-images/sdf-mogus/sdf-mogus-title.png',
    description: 'Ray Marching SDF Creation Engine.',
    tags: ['OpenGL', 'GLSL', 'C++'],
  },
  {
    name: 'Surface & Post Shaders',
    link: '/projects/shader-fun',
    image: '/projects-images/shader-fun/shader-fun-title.png',
    description: 'Collection of GLSL surface & post shaders.',
    tags: ['OpenGL', 'GLSL', 'C++'],
  },
  {
    name: '3D Rasterizer',
    link: '/projects/rasterizer',
    image: '/projects-images/rasterizer/rasterizer-title.png',
    description: '3D CPU Based Rasterizer with interactive camera controls.',
    tags: ['C++', 'Qt'],
  },
];

const ProjectsSection = () => {
  return (
    <div className="bp-12 md:pb-40 md:pt-16">
      <h1 className="mt-32 text-center text-4xl font-bold">
        My Projects
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
                        className="rounded-xl opacity-30 shadow-lg transition-[opacity] duration-300 ease-in-out hover:opacity-75 md:opacity-25"
                        src={project.image}
                        alt={project.name}
                        width={500}
                        height={500}
                      />
                      <div className="absolute left-1/4 top-1/4 w-1/2">
                        <h1
                          className={`rounded-xl text-3xl font-semibold dark:bg-opacity-0 max-xs:text-xl`}
                        >
                          {project.name}
                        </h1>
                        <p className="mt-3 block font-semibold max-sm:hidden md:hidden xl:block">
                          {project.description}
                        </p>
                        <div className="flex flex-row justify-center space-x-1 md:space-x-4">
                          {project.tags.map((skill, idx) => {
                            // eslint-disable-next-line react/jsx-key
                            return (
                              // eslint-disable-next-line react/jsx-key
                              <div
                                key={idx}
                                className={`mt-4 rounded-xl px-4 py-2 font-semibold text-white dark:outline dark:outline-2 dark:outline-white max-xs:text-sm ${
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

export default ProjectsSection;
