import React from 'react';

const SectionVideo = () => {
  return (
    <section
      className='h-screen text-center leading-10 overflow-hidden z-30 relative text-white flex flex-col items-center justify-end'
    >
      <header
        className='z-30 relative flex flex-col mb-10'
      >
        <h1
          className='text-7xl mb-8'
        >
          BRAND REALTY TEAM
        </h1>
        <p
          className='text-lg font-light'
        >
          Houston Real Estate Experts
        </p>
      </header>

      <footer
        className='z-30 relative mb-36'
      >
        <a
          className='font-bold py-5 px-11 border-2 border-white delay-100 duration-300 hover:bg-white hover:text-black'
          href='#'
        >
          SEARCH ALL HOMES
        </a>
      </footer>

      <div
        className='absolute top-0 bottom-0 h-full z-10'
      >
        <div
          className='absolute object-center w-full h-full z-20 bg-[rgba(0,0,0,0.5)] opacity-75'
        ></div>
        <video
          className='object-center object-cover w-full'
          autoPlay
          muted
          loop
          src='/video.webm'
        />
      </div>
    </section>
  )
};

export default SectionVideo;