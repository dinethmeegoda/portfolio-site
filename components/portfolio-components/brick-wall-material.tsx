import React from 'react';
import Image from 'next/image';

const BrickWall = () => {
  return (
    <section id="home">
      <div className="container mx-auto flex flex-col items-center justify-center text-left lg:space-x-4">
        <div className="mx-5 flex flex-col sm:space-x-16 xl:mt-2">
          <h1 className="mb-6 text-center text-4xl font-semibold xl:text-6xl">
            {' '}
            Procedural Wall Material
          </h1>
          {/*Picture*/}
          <div className="my-8 max-sm:my-4">
            <div className="xl:float-left xl:mr-20 xl:w-1/2">
              <div className="flex aspect-video flex-col">
                <Image
                  className="rounded-xl"
                  src="/portfolio-images/brick-wall-material/wallshowcase.gif"
                  alt=""
                  width={720}
                  height={720}
                />
                <p className="font-style: my-4 text-center italic max-xl:text-lg max-sm:text-lg xl:text-xl">
                  Brief Video Overview of the project
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="mb-4 font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl max-sm:text-lg xl:mt-0 xl:text-left xl:text-3xl">
                Introduction & Goals
              </h1>
              <div className="leading-relaxed max-xl:text-lg max-sm:text-lg xl:mb-10 xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                <p className="mb-4">
                  This project is my first full interactive procedural material
                  within Substance Designer. It was made for the larger group
                  project,{' '}
                  <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
                    <a href="../projects/procedural-city">procedural city</a>
                  </span>
                  . For this project, we needed a brick wall material for the
                  walls and chimneys of the procedural medieval city that we
                  were putting together.
                </p>
                <p>We had the following goals:</p>
                <ul className="mb-4 list-inside list-disc">
                  <li>A Realistic Style</li>
                  <li>Customizable Brick/Stucco Ratio</li>
                  <li>Controllable Brick Patterns/Tiling</li>
                  <li>Integration with Unreal Engine</li>
                </ul>
                <p>
                  In order to make this material in Substance Designer, I had to
                  focus on two different parts and find a way to blend them
                  together; the bricks and the wall.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="xl:w-full">
              <h1 className="mb-4 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl max-sm:text-lg xl:text-left">
                References
              </h1>

              <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Like with any project that creates a visual output based on
                realism, some reference photographs are needed. Through these
                references I noticed this wall had brick exposed in certain
                blobby spots through the stucco, which could be simulated by
                something like Perlin Noise. I also noticed that each brick had
                some bit of warping and edges either occluded or chipped off by
                the stucco. I kept these observations in mind and applied them
                to my workflow.
              </p>
              <div className="mx-auto grid w-full items-center gap-4 max-sm:grid-rows-3 md:grid-cols-3">
                <Image
                  className="flex rounded-xl"
                  src="/portfolio-images/brick-wall-material/ref1.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
                <Image
                  className="flex rounded-xl"
                  src="/portfolio-images/brick-wall-material/ref2.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
                <Image
                  className="flex rounded-xl"
                  src="/portfolio-images/brick-wall-material/ref3.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <h1 className="mb-8 mt-12 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl max-sm:mb-4 max-sm:text-lg xl:text-left">
                Making the Bricks: The Shape
              </h1>

              <div className="mb-16 flex flex-row-reverse max-lg:mb-8 max-lg:flex-col">
                <div className="flex flex-col">
                  <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:mb-8 max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    First, I started with the core of the material: the bricks.
                  </p>
                  <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:mb-8 max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    Luckily, Substance Designer has a Tile Generation Node that
                    I leveraged alongside edge detect, bevel, and levels nodes
                    to get that rounded brick look.
                  </p>
                </div>
                <Image
                  className="mr-8 rounded-xl max-lg:w-full lg:w-1/2"
                  src="/portfolio-images/brick-wall-material/brick-generation.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="mb-16 flex flex-row max-lg:mb-8 max-lg:flex-col">
                <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:mb-8 max-sm:text-lg md:pr-6 xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                  To fully customize how each brick looks, a core node used in
                  my workflow was the Flood Fill node. Because it finds
                  &apos;islands&apos; in the image and allows seperate effects
                  to be done to each one, it was perfect for me to independently
                  apply effects to each bricks. This is done by using more flood
                  fill nodes like grayscale, which applies a different lightness
                  to each brick, and gradient, which applies a randomly oriented
                  gradient to each brick.
                </p>
                <Image
                  className="flex rounded-xl max-lg:w-full lg:w-1/2"
                  src="/portfolio-images/brick-wall-material/flood-fill.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:mb-8 max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Next, I wanted to give each brick realistic and non-uniform
                shape. To do this, I wanted to chip off a piece of each brick so
                they weren&apos;t all the same shape and gave it the weathered
                look.
              </p>
              <div className="flex flex-row max-sm:flex-col">
                <div className="mr-8 flex flex-col md:w-1/2">
                  <Image
                    className="mb-4 flex w-full rounded-xl max-sm:mb-8"
                    src="/portfolio-images/brick-wall-material/chip-edges.png"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:mb-8 max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    To do this, I first used Flood Fill Gradient with Clouds to
                    get random edges of the brick to chip off.
                  </p>
                </div>
                <div className="mr-8 flex flex-col md:w-1/2">
                  <Image
                    className="mb-4 flex w-full rounded-xl max-sm:mb-8"
                    src="/portfolio-images/brick-wall-material/warp-bricks.png"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    Then, I used a combination of Perlin and Voronoi Crystal
                    Noise to warp the edges of each brick and make it look old.
                  </p>
                </div>
              </div>
              <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                After using a Flood Fill Grayscale to give each brick a slightly
                different shade, I blended the warped bricks and the chipped off
                edges to get the realistic shape I wanted. In order to give them
                their much needed depth, I used the normal node with a high
                intensity to exaggerate the shape of each brick. Running that
                into a Curvature Smooth Node allowed me to convert those normal
                values back into grayscale to finally get a realistically shaped
                brick texture.
              </p>
              <Image
                className="mb-16 w-full rounded-xl"
                src="/portfolio-images/brick-wall-material/normals.png"
                alt=""
                width={500}
                height={500}
              />
              <h1 className="mb-4 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl max-sm:text-lg xl:text-left">
                Making the Bricks: The Color
              </h1>
              <div className="mb-8 flex flex-row max-lg:flex-col">
                <p className="mb-8 pr-6 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                  First, I wanted to create the overall color of the bricks.
                  Using the brick shaped texture we just made, along with Flood
                  Fill Greyscale and BnW Spots for added variation, I mapped the
                  values to a gradient map with different values of brown to
                  create the brick colors.
                </p>
                <Image
                  className="flex rounded-xl max-lg:w-full xl:w-2/3"
                  src="/portfolio-images/brick-wall-material/lighter-colors.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="mb-8 flex flex-row-reverse max-lg:flex-col">
                <div className="flex flex-col">
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pl-8 xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    However, these bricks were still lacking the white outlines
                    on the edge of each brick to show the cement of each brick
                    poking through the paint. outlines.
                  </p>
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pl-8 xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    I used a levels node to highlight the edges of the brick
                    texture and used it as a mask to mix the color white with
                    the established brick color to create these outlines.
                  </p>
                </div>
                <Image
                  className="flex rounded-xl max-lg:w-full xl:w-1/2"
                  src="/portfolio-images/brick-wall-material/outlines.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="mb-8 flex flex-col lg:flex-row">
                <div className="flex flex-col">
                  <p className="mb-8 pr-12 leading-relaxed max-xl:text-lg max-sm:text-lg xl:text-left xl:text-2xl xl:leading-loose">
                    But these bricks still look too light and flat. I wanted to
                    create a darker part of the bricks to push the contrast.
                  </p>
                  <p className="mb-8 pr-12 leading-relaxed max-xl:text-lg max-sm:text-lg xl:text-left xl:text-2xl xl:leading-loose">
                    I used the Flood Fill Gradient with BnW Spots to give the
                    bricks a rusted, spotty look on just some sections of each
                    brick. After applying a gradient map with the colors I
                    wanted, the darker parts were done.
                  </p>
                </div>
                <Image
                  className="flex w-full rounded-xl lg:w-1/2"
                  src="/portfolio-images/brick-wall-material/darker-bricks.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Finally, I blended these darker and lighter values together to
                create the final brick color.
              </p>
              <Image
                className="mb-16 flex w-full rounded-xl"
                src="/portfolio-images/brick-wall-material/final-brick-color.png"
                alt=""
                width={500}
                height={500}
              />
              <h1 className="mb-8 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl max-sm:text-lg xl:text-left">
                Making the Stucco Wall
              </h1>
              <div className="flex flex-row-reverse max-lg:flex-col">
                <div className="flex flex-col">
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pl-16 xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    Making the base wall was luckily simple. Since the wall
                    exists to be somewhat plain to give more attention to the
                    bricks, it doesn't have to be super complicated.
                  </p>
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pl-16 xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    To make the wall texture, randomness is best. I just used a
                    combination of several noise functions inputted into a
                    gradient map to make the final wall with colors.
                  </p>
                </div>
                <Image
                  className="mb-8 w-1/2 rounded-xl max-lg:w-full"
                  src="/portfolio-images/brick-wall-material/wall-texture.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-row max-lg:flex-col">
                <div className="flex flex-col">
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    Making the wall itself isn&apos;t enough, however. We also
                    need to create a mask through which the bricks would be
                    exposed through the wall.
                  </p>
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    To do this, I used a Perlin Noise with Clouds, Levels, and
                    Directional Warp to create a mask in which the lower values
                    would indicate where bricks could be exposed.
                  </p>
                </div>
                <Image
                  className="w-5/8 mb-8 rounded-xl max-lg:w-full"
                  src="/portfolio-images/brick-wall-material/brick-mask.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                After blending that with the wall and the plain brick texture,
                we have the overall texture of the wall. Now, for the node that
                drives the core effect of this material: Height Blend.
              </p>
              <div className="flex flex-row-reverse max-lg:flex-col">
                <div className="flex flex-col">
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pl-12 xl:text-left xl:text-2xl xl:leading-loose">
                    Height Blend takes in maps for Height Top and Height Bottom
                    and realistically blends these materials together to create
                    a height map. By putting in the flat brick texture as the
                    top and the wall as the bottom, I was able to create a
                    height map in which the bricks poked through the exposed
                    zones from the previously created map.
                  </p>
                </div>
                <Image
                  className="mb-8 rounded-xl max-lg:w-full"
                  src="/portfolio-images/brick-wall-material/brick-height-blend.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-row max-lg:flex-col">
                <div className="flex flex-col">
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    Finally, this core height map drives the creation for all of
                    the indivdual maps used for our material.
                  </p>
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                    The base color was taken by blending the bricks as
                    foreground and the wall as background and taking the height
                    blend as the opacity mask.
                  </p>
                </div>
                <Image
                  className="mb-8 rounded-xl max-lg:w-full"
                  src="/portfolio-images/brick-wall-material/final-mixed-color.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-row-reverse max-lg:flex-col">
                <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pl-12 xl:text-left xl:text-2xl xl:leading-loose">
                  The roughness map was taken by blending a grunge map with the
                  height blend and adjusting the levels to vary the roughness
                  and create smaller highlights on the bricks.
                </p>
                <Image
                  className="mb-8 w-1/2 rounded-xl max-lg:w-full"
                  src="/portfolio-images/brick-wall-material/roughness.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Lastly, the Normals, Ambient Occlusion, and of course, the
                height, were derived directly from the height blend node. The
                normals were generated from a normal node that created them
                based on the height blend and the AO map was created through an
                AO node that took the data from the height blend to create the
                ambient shadows on the edge of bricks.
              </p>
              <h1 className="mb-4 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl max-sm:text-lg xl:text-left">
                Customizing the Parameters
              </h1>
              <p className="mb-10 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Now that we have our base material, I had to choose customizable
                parameters that would give the user control over the variation
                of the material. Since the variations weren&apos;t mean&apos;t
                to look wildly different, I wanted to focus control on two
                different aspects: changing the patterns the bricks were
                exposed, and changing how much the bricks were able to uniformly
                be exposed.
              </p>
              <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Since the brick exposure pattern was driven by the perlin noise,
                I used the Scale and Disorder inputs to the noise to change the
                tiling and pattern of the noise respectively.
              </p>
              <div className="flex flex-row max-lg:flex-col lg:space-x-8">
                <div className="flex flex-col xl:w-1/2">
                  <Image
                    className="mb-4 flex w-full rounded-xl"
                    src="/portfolio-images/brick-wall-material/scale.gif"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pr-12 xl:text-center xl:text-2xl xl:leading-loose">
                    The Scale input would change the size of the noise pattern
                    and therefore the size of the exposed bricks.
                  </p>
                </div>
                <div className="flex flex-col xl:w-1/2">
                  <Image
                    className="mb-4 flex w-full rounded-xl"
                    src="/portfolio-images/brick-wall-material/disorder.gif"
                    alt=""
                    width={400}
                    height={400}
                  />
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pr-12 xl:text-center xl:text-2xl xl:leading-loose">
                    The Disorder input would change the randomness of the
                    pattern and therefore the randomness of the exposed bricks.
                  </p>
                </div>
              </div>
              <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                The ratio of brick to stucco was directly being controlled by
                the height blend node, so I used the inputs Height Offset and
                Contrast to control this aspect.
              </p>
              <div className="flex flex-row max-lg:flex-col lg:space-x-8">
                <div className="flex flex-col xl:w-1/2">
                  <Image
                    className="mb-4 flex w-full rounded-xl"
                    src="/portfolio-images/brick-wall-material/heightoffset.gif"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pr-12 xl:text-center xl:text-2xl xl:leading-loose">
                    Height Offset would change how &apos;tall the wall was&apos;
                    and therefore how much of the brick would show through,
                    either the top or the whole brick.
                  </p>
                </div>
                <div className="flex flex-col xl:w-1/2">
                  <Image
                    className="mb-4 flex w-full rounded-xl"
                    src="/portfolio-images/brick-wall-material/contrast.gif"
                    alt=""
                    width={400}
                    height={400}
                  />
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pr-12 xl:text-center xl:text-2xl xl:leading-loose">
                    Contrast controlled the blending. A lower contrast value
                    would reduce the &apos;opacity&apos; of the wall and cause
                    the bricks to show through even through the non-exposed area
                    of the wall.
                  </p>
                </div>
              </div>
              <h1 className="mb-4 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl max-sm:text-lg xl:text-left">
                Unreal Engine Integration
              </h1>
              <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Now that we&apos;ve selected which inputs to expose, I had to
                integrate it into the overall project workflow for the Unreal
                Engine Script/Environment Artist that would put together the
                scene. Through the Substance Designer Plugin and importing the
                .sbsar export from Designer, the material was easily editable
                within Unreal Engine.
              </p>
              <Image
                className="mb-16 w-full rounded-xl"
                src="/portfolio-images/brick-wall-material/unreal.gif"
                alt=""
                width={500}
                height={500}
              />
              <h1 className="mb-4 text-3xl font-semibold text-blue-800 dark:text-fuchsia-400 max-xl:text-xl max-sm:text-lg xl:text-left">
                What I&apos;ve learned
              </h1>
              <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Going through the process of creating an interactive material
                with a goal really let me understand not only the power of
                specific nodes, but also the method in which you can mentally
                seperate effects and use the blend node to put them together at
                the end of the pipeline.
              </p>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/5">
                  <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg lg:pr-8 xl:text-left xl:text-2xl xl:leading-loose">
                    The power of the Flood Fill, Height Blend, and Gradient Map
                    nodes were really shown to me through this project. But I
                    also learned that splitting the project into sections like
                    the brick shape, brick color, wall texture, wall mask, and
                    blending it all together were instrumental in making this
                    material and organizing the thinking and process in creating
                    such a complex material. Commenting and using the frame tool
                    to put together nodes performing a similar function greatly
                    increased readability and let me easily pick up my thinking
                    when working this on this across several days.
                  </p>
                </div>
                <Image
                  className="mb-8 rounded-xl max-lg:mx-auto lg:h-1/2"
                  src="/portfolio-images/brick-wall-material/brokewalldemo.gif"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <p className="mb-8 leading-relaxed max-xl:text-lg max-sm:text-lg xl:pr-12 xl:text-left xl:text-2xl xl:leading-loose">
                Overall, I&apos;m very happy with the way this came out, and
                look forward to using these skills in making more materials with
                Substance Painter one day. Special Thanks for{' '}
                <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
                  <a href="https://www.youtube.com/watch?v=n4bRnyoaozg">
                    this tutorial
                  </a>
                </span>{' '}
                by Youtuber Kalyson for providing me with a base to work with
                and guiding the process when I went astray.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrickWall;
