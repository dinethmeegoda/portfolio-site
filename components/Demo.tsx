import React from 'react';

const Demo = () => {
  return (
    <section id="demo">
      <div className="bp-12 my-12 md:pb-48 md:pt-16">
        <h1 className="text-center text-4xl font-bold">Demo Reel</h1>
        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:-space-y-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2">
            <h1> Video</h1>
            <p>place video here</p>
            <br />
            <p>I belive you should!</p>
          </div>
          <div className="md:w-1/2">
            <h1>My Skills</h1>
            <p>Blanks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
