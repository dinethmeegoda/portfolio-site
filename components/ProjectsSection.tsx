import React from 'react';

const projects = [
  {
    name: 'Project1',
    description: 'this is a description',
    link: '/projects/mini-maya',
    image: '/headshot.png',
    tags: ['C++', 'OpenGL', 'Qt'],
  },
  {
    name: 'Project2',
    description: 'this is a description',
    link: '/projects/mini-maya',
    image: '/headshot.png',
    tags: ['C++', 'OpenGL', 'Qt'],
  },
  {
    name: 'Project3',
    description: 'this is a description',
    link: '/projects/mini-maya',
    image: '/headshot.png',
    tags: ['C++', 'OpenGL', 'Qt'],
  },
];

const ProjectsSection = () => {
  return (
    <div className="bp-12 md:pb-40 md:pt-16">
      <h1 className="mt-32 text-center text-4xl font-bold">
        What Do I Do?
        <hr className="mx-auto my-4 h-2 w-12 rounded border-0 bg-gradient-to-r from-blue-600 to-fuchsia-700"></hr>
      </h1>

      <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
        <div className="grid grid-cols-2">
          {projects.map((project, idx) => {
            return (
              <div
                key={idx}
                /* animation doesnt work rn*/
                className={`mr-2 mt-2 flex rounded px-4 font-semibold text-white ${
                  idx % 2 === 0
                    ? 'bg-gradient-to-r from-blue-500 to-blue-700'
                    : 'bg-gradient-to-r from-fuchsia-600 to-fuchsia-800'
                }`}
              >
                {project.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
