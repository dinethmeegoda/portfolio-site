import React from 'react';
import Image from 'next/image';

const VRMesh = () => {
  return (
    <section id="home">
      {/*Div that contains picture and text*/}
      <div className="container mx-auto flex flex-col items-center justify-center text-left lg:space-x-4">
        {/*Name Title Text*/}
        <div className="mx-5 flex flex-col xl:mt-2">
          <h1 className="text-center text-4xl font-semibold xl:text-6xl">
            {' '}
            VR Mesh Cutting Tool
          </h1>
          {/*Picture*/}
          <div className="my-10">
            <div className="xl:float-left xl:mr-20 xl:w-3/5">
              <div className="flex aspect-video flex-col">
                <iframe
                  className="h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/7zhOj0iSXVE?si=kTtDrxwUWDojmWNQ"
                  width="100%"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <p className="font-style: my-4 text-center italic max-xl:text-lg max-sm:text-lg xl:text-xl">
                  Brief Video Overview of the project
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="mb-4 font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl xl:mt-0 xl:text-left xl:text-3xl">
                The Problem
              </h1>
              <p className="leading-relaxed max-xl:text-lg max-sm:text-lg xl:mb-10 xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                This Tool was made during my research internship at Penn
                Medicine while working on VR Surgical Training Didactics that
                would be used wirelessly on the Oculus Quest 2 developed on the
                Unity Engine. This was specifically made for a module that would
                train surgeons on completing a &#34;Surgical Airway&#34;
                procedure, in which surgeons would make a small incision into
                the patient&apos;s neck.
              </p>
            </div>
          </div>
          <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
            This would use the Quest&apos;s hand tracking feature to increase
            the immersion and practice value of the simulation. However, to make
            this simulation accurate, we needed to use a real-time mesh cutting
            feature that would run at least 75 FPS on the Quest to deter motion
            sickness.
          </p>
          <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
            However, there was no accessible algorithm that would be able to
            modify and cut complex meshes in realtime while maintaining the high
            framerate needed for VR.
          </p>
          <div className="flex flex-col items-center xl:flex-row">
            <div className="xl:w-3/4">
              <h1 className="mb-4 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl max-sm:text-lg xl:text-left">
                Breakthrough Ideas
              </h1>
              <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                To solve this complex issue, I began searching through the
                internet for effects that would help me figure out this effect.
                I started by specifically looking through effects that created a
                hole or cut in a surface that wouldn&apos;t have to rely on
                changing too much of the underlying geometry.
              </p>
              <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Luckily, I stumbed on{' '}
                <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
                  <a href="https://www.youtube.com/watch?v=qiAiVa0HtyE">
                    this video
                  </a>
                </span>{' '}
                by Gabriel Aguiar that showed how to generate cracks on the
                ground using a &apos;crack mesh&apos; that would be rendered on
                the surface on the ground and used a stencil buffer and
                passthrough rendering in order to create the effect that this
                crack was &apos;cutting into&apos; the ground.
              </p>
              <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                I decided to extrapolate this idea to my own problem by creating
                my passthrough rendering materials that would be able to create
                the illusion of cutting through the mesh. However, because this
                cut had to be generated by the user, it could not be static and
                had to be procedurally generated using the user&apos;s hand
                tracking.
              </p>
            </div>
            <div className="mx-auto xl:w-1/4">
              <Image
                className=""
                src="/projects-images/vr-mesh/MeshCutDemo.gif"
                alt=""
                width={500}
                height={500}
              />
              <p className="font-style: my-4 text-center italic max-xl:text-lg max-sm:text-lg xl:text-xl">
                Early Prototype of the tool that instantiates cut meshes
              </p>
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:mt-6 max-xl:text-xl xl:mt-0 xl:text-left">
              Implementation
            </h1>
            <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
              To apply this concept to my own purpose, I defined certain objects
              as cuttable and used the point of the scalpel object as a marker
              to test when a cuttable mesh was intersected. The intersection
              location in the mesh&apos;s local space was determined by the
              mesh&apos;s own physics collider, allowing intersections to be
              checked from a simple box or cylinder for more performant
              calculations to a complete mesh collider which would record more
              accurate intersections.
            </p>
            <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
              However, having these cuts occur with every check of the
              intersection would have been too inefficient so I needed to come
              up with a way to only create a single valid intersection point in
              each section of space. To do this, I implemented a simple 3D
              Hashing algorithm that would break up each point into a single
              section of space so that each section would only have one
              intersection point.
            </p>
            <Image
              className="mx-auto xl:w-4/5"
              src="/projects-images/vr-mesh/hashSketch.jpg"
              alt=""
              width={1560}
              height={758}
            />
            <p className="mx-auto mb-10 mt-4 text-center italic max-xl:text-lg max-sm:text-lg xl:text-xl">
              Whiteboard prototype of the 3D Hashing Algorithm
            </p>
          </div>
          <div>
            <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
              Since I needed the cut to be continous as the user intersected the
              scalpel with the mesh, I decided to use a spline structure in
              order to have points of a bezier curve be placed in each hashed
              section of space as the user intersects the scalpel with the mesh.
              I used{' '}
              <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
                <a href="https://github.com/SebLague/Path-Creator">
                  this library
                </a>
              </span>{' '}
              from Sebastian Lague to implement the splines into the project.
            </p>
            <div className="xl:flex xl:flex-row">
              <div className="mx-auto my-auto xl:mr-10 xl:w-1/4">
                <Image
                  className="mx-auto"
                  src="/projects-images/vr-mesh/SeeThroughCut.gif"
                  alt=""
                  width={500}
                  height={500}
                />
                <p className="mx-auto mb-10 mt-4 text-center italic max-xl:text-lg max-sm:text-lg xl:text-left xl:text-xl ">
                  View of the spline and underlying procedural geometry of the
                  cut.
                </p>
              </div>
              <div className="xl:w-3/4">
                <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                  Now that we have a spline in 3D space which represents the cut
                  we want to create, we need to actually generate the mesh along
                  the spline. Luckily, the library comes with powerful tools to
                  achieve this, which I used to procedurally generate a mesh
                  along the curve. However, in order to get a convincing look, I
                  had to generate the mesh right on the surface of the model
                  while using the surface normal to align the mesh generation
                  right under the surface of the cuttable mesh in the correct
                  orientation. Using a Ray Caster from the scalpel, I found the
                  surface normal of the cuttable surface and used that
                  orientation as the local up vector to generate the cut mesh
                  right along the surface of the mesh that is being cut. With
                  some more simple calculations, such as finding the local right
                  direction by crossing the up vector and direction of the
                  spline (the forward vector since Unity is left-handed), the
                  mesh was able to be generated convincingly along the spline.
                </p>
              </div>
            </div>
            <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
              Finally, to make this mesh actually look like a cut, I allowed
              material parameters into the mesh creation script so that the user
              would be able to apply custom materials to the top layer of the
              cut, sides, and bottom. By applying the passthrough material from
              earlier, since the mesh was generated with the normals of the top
              layer pointing up, the top layer is not visible and it creates the
              illusion that the object is being cut into.
            </p>
            <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
              Combining the passthrough material, section hashing, splines, and
              mesh generation, I was able to create the intended effect. Under
              the hood, as the user intersects the scalpel (or whatever is set
              as the cutter object) with a cuttable object, a point on a spline
              is generated (or a new spline is created if it is part of a new
              cut) as long as the user is cutting within a new section of space
              determined by the hashing algorithm. Then as new points are being
              placed on the spline, the mesh is generated taking in the
              scalpel&apos;s distance from the surface, also simulating cut
              depth. And best of all, this whole system is incredibly performant
              in realtime VR. Nice!
            </p>
          </div>
          <div className="">
            <h1 className="mb-4 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl xl:text-left">
              Usage
            </h1>
            <div className="xl:flex xl:flex-row">
              <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:w-3/4 xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                This tool can be used by both users of the program as well as
                developers. The mesh generation script can be run before runtime
                along a spline, which is also easily editable within the editor
                due to Sebastian Lague&apos;s fantastic spline library. The
                developer also has access to several parameters within the
                script, allowing them to change cut width, the materials on the
                sides and bottom of cut, and how accurate the cut can be by
                customizing the section block size of the hashing algorithm in
                any of the x,y,z axes. All in all, this tool is intuitive to use
                for the developer and has a seamless experience for the user if
                they want to cut up an object, particularly in a surgical
                simulation.
              </p>
              <div className="mx-auto xl:w-1/4">
                <Image
                  className="mx-auto"
                  src="/projects-images/vr-mesh/MaterialCut.gif"
                  alt=""
                  width={500}
                  height={500}
                />
                <p className="font-style: mb-10 mt-4 text-center text-xl italic max-xl:text-lg max-sm:text-lg xl:text-left xl:text-xl">
                  Material Customization for the cut
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="mb-4 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl xl:text-left">
              Future Work and What I&apos;ve Learned
            </h1>
            <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
              This project was an incredible learning experience for me and I
              fully appreicate the oppoturnity to work on an exciting project
              like this where there wasn&apos;t a clear cut solution and a new
              system had to be figured out. Although I no longer work on this
              project, and I&apos;m sure it has been continued to be developed,
              some new features that could be added are looping cuts, dynamic
              cut width based on scalpel orientation, general bug-fixes and
              specifically for a surgical use case, blood effects when a mesh is
              cut.
            </p>
            <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
              Through this project, I learned how to leverage my resources to
              compile different ideas and solutions to figure out ideas that
              would work for my specific problem. Having that &apos;aha&apos;
              moment when watching the ground crack VFX tutorial and realizing I
              could exrapolate a similar process for creating an efficient
              cutting system was amazing and I hope to have similar moments when
              figuring out a graphics problem for future technical art projects.
              This was also my first experience working through these projects
              in a group setting and talking through problems as a team.
              Although this project&apos;s implementation was mostly designed
              and programmed by me, having teammates to bounce ideas off of was
              an invaluable resource and something I hope to have more in the
              future.
            </p>
            <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
              Special thanks to my entire team at Penn Medicine for being there
              for me and my ideas, especially by mentor{' '}
              <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
                <a href="https://github.com/dwebpenn">Dan Weber</a>
              </span>
              {', '}
              and my fellow PURM DMD&apos;er,{' '}
              <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
                <a href="https://presentations.curf.upenn.edu/person/li-jacqueline-0">
                  Jacqueline Li
                </a>
              </span>
              {'.'}
            </p>
            <div className="flex w-full flex-col items-center justify-center">
              <Image
                className="rounded-xl"
                src="/projects-images/vr-mesh/FinalMeshCut.gif"
                alt=""
                width={853}
                height={480}
              />
              <p className="font-style: my-4 italic max-xl:text-lg max-sm:text-lg xl:text-left xl:text-xl">
                Final Demo of the Cut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VRMesh;
