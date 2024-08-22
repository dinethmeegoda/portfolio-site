import React from 'react';
import Image from 'next/image';

const Grappler = () => {
  return (
    <section id="home">
      <div className="container mx-auto mb-10 text-center text-xl xl:text-3xl">
        <p className="mx-6 mb-10">
          {' '}
          A VR Game prototype which enables the player to swing around with
          dual-wield grapple guns! It&apos;s a physics based game developed with
          OpenXR and Unity and I&apos;m excited to develop it further.
        </p>
        <p>
          Still working on the breakdown but, here&apos;s a{' '}
          <span className="font-bold text-blue-800 underline dark:text-fuchsia-500">
            <a
              href="https://github.com/dinethmeegoda/vr-grappling"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </span>
          .
        </p>
        <Image
          className="mx-auto mt-10 rounded-xl shadow-2xl"
          src="/constructionMonkey.png"
          alt=""
          width={1472}
          height={490}
        />
      </div>
    </section>
  );
};

export default Grappler;
