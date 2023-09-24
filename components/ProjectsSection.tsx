import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const projects = [
  {
    name: 'VR Mesh Tool',
    link: '/projects/vr-mesh-cut',
    image: '/projects/vr-mesh/title.PNG',
    description:
      'A tool built for the Unity Engine with C# that procedurally creates real-time mesh cuts on models.',
    tags: ['C# ', 'Unity ', 'VR '],
  },
  {
    name: 'Mini Minecraft',
    link: '/projects/mini-minecraft',
    image: '/projects/mini-minecraft/title.PNG',
    description:
      'Version of Minecraft made with OpenGL and C++ implemented with a custom game engine.',
    tags: ['C++', 'OpenGL', 'GLSL'],
  },
  {
    name: 'Path Tracer',
    link: '/projects/pathtracer',
    image: '/projects/path-tracer/title.PNG',
    description:
      'Pathtracer built with C++ and GLSL with custom scene creation and variety of materials.',
    tags: ['GLSL', 'OpenGL', 'C++'],
  },
  {
    name: 'Procedural City',
    link: '/projects/procedural-city',
    image: '/projects/procedural-city/title.PNG',
    description:
      'Procedurally Built Medieval City made in Houdini and Unreal Engine using Wave Function Collapse.',
    tags: ['C++ ', 'OpenGL ', 'Qt '],
  },
  {
    name: 'Real-Time Renderer',
    link: '/projects/realtime-renderer',
    image: '/projects/realtime-renderer/title.PNG',
    description:
      'Real-time Rendering Engine written with GLSL and OpenGL implementing PBR materials, textures, and HDRI mapping.',
    tags: ['C++', 'OpenGL', 'Qt'],
  },
  {
    name: 'Mini Maya',
    link: '/projects/mini-maya',
    image: '/projects/mini-maya/title.PNG',
    description:
      '3D Modelling Program made with C++ and OpenGL that implements Catmull-Clark subdivision and mesh skinning with basic skeletons',
    tags: ['C++', 'OpenGL', 'Qt'],
  },
  {
    name: 'WebGL Procedural Fireball',
    link: '/projects/webGL-fireball',
    image: '/projects/webgl-fireball/title.PNG',
    description: 'Procedurally generated fireball made with WebGL and GLSL.',
    tags: ['C++', 'OpenGL', 'Qt'],
  },
  {
    name: 'WebGL Procedural Technoblob',
    link: '/projects/webGL-procedural-blob',
    image: '/projects/webgl-blob/title.PNG',
    description:
      'Procedurally generated noise-function dense blob made with WebGL and GLSL.',
    tags: ['C++', 'OpenGL', 'Qt'],
  },
  {
    name: 'Portfolio Site',
    link: '/projects/portfolio-site',
    image: '/projects/portfolio-site/title.png',
    description: 'Personal Portfolio Site (So Meta).',
    tags: ['C++', 'OpenGL', 'Qt'],
  },
];

const ProjectsSection = () => {
  return (
    <div className="bp-12 md:pb-40 md:pt-16">
      <h1 className="mt-32 text-center text-4xl font-bold">
        My Projects
        <hr className="mx-auto my-4 h-2 w-12 rounded border-0 bg-gradient-to-r from-blue-600 to-fuchsia-700"></hr>
      </h1>

      <div className="mt-12 flex min-h-screen items-center justify-center text-center">
        <div className="grid w-2/3 grid-flow-row-dense grid-cols-1 gap-12 md:w-5/6 md:grid-cols-2 lg:w-5/6 lg:grid-cols-3">
          {projects.map((project, idx) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={project.link}>
                <div key={idx} className={`relative mx-auto rounded-xl`}>
                  <div className="mx-auto flex">
                    <Image
                      className="rounded-xl opacity-30 shadow-lg transition-[opacity] duration-300 ease-in-out hover:opacity-75 md:opacity-25"
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={500}
                    />
                    <div className="absolute left-1/4 w-1/2 max-xl:top-1/4 xl:top-12">
                      <h1
                        className={`rounded-xl text-3xl font-semibold dark:bg-opacity-0`}
                      >
                        {project.name}
                      </h1>
                      <p className="mt-3 hidden font-semibold xl:block">
                        {project.description}
                      </p>
                      <div className="flex flex-row justify-center space-x-1 md:space-x-4">
                        {project.tags.map((skill, idx) => {
                          // eslint-disable-next-line react/jsx-key
                          return (
                            // eslint-disable-next-line react/jsx-key
                            <div
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
