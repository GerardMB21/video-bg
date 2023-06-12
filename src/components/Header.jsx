import React from 'react'

const Header = () => {
  return (
    <header
      className='py-2 px-4 flex items-center absolute top-6 w-full justify-between z-40 text-white'
    >

      <div
        className='mr-2.5'
      >
        <img
          className='max-h-14 max-w-full'
          src='/logo.webp'
        />
      </div>

      <nav
        className=''
      >
        <ul
          className='underline-animation flex text-xs font-bold leading-relaxed tracking-widest [&>li>a]:px-4 [&>li>a]:py-2'
        >
          <li>
            <a href="#">SELECCIONAR IDIOMA</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">SEARCH COMMERCIAL</a>
          </li>
          <li>
            <a href="#">HOME SEARCH</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <a href="#">(832) 613-7860</a>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header