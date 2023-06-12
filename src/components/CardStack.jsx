import React from 'react'

const CardStack = ({src, alt, text}) => {
  return (
    <div
      className='flex flex-col'
    >
      <img
        className='max-w-[400px] max-h-96 mb-8'
        style={{ aspectRatio: '4:5' }}
        src={src}
        alt={alt}
      />
      <span
        className='text-xl mb-14'
      >
        {text}
      </span>
      <a
        className='m-auto font-bold py-5 px-11 border-2 text-black border-black delay-100 duration-300 hover:bg-black hover:text-white'
        href="#"
      >
        LEARN MORE
      </a>
    </div>
  )
};

export default CardStack;
