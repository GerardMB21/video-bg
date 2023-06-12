import React from 'react'
import CardStack from './CardStack';

const data = [
  {
    src: '/card_1.webp',
    alt: 'card 1',
    text: 'BUYERS'
  },
  {
    src: '/card_2.webp',
    alt: 'card 2',
    text: 'INVESTORS'
  },
  {
    src: '/card_3.webp',
    alt: 'card 3',
    text: 'SELLERS'
  },
];

const SectionStack = () => {
  return (
    <section
      className='my-20 px-12 text-center tracking-wide'
    >
      <h2
        className='mb-12 text-4xl font-normal'
      >
        MAXIMIZING THE VALUE OF YOUR HOME IS NOT A DREAM
      </h2>
      <p
        className='text-base mb-12'
      >
        Brand Realty Team makes it possible and takes the challenge with you.
      </p>
      <div
        className='grid grid-cols-3 gap-4 items-center justify-center'
      >
        {
          data.map((item, index) => (
            <CardStack
              key={index}
              src={item.src}
              alt={item.alt}
              text={item.text}
            />
          ))
        }
      </div>
    </section>
  )
};

export default SectionStack;
