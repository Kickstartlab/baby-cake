import React, { useState } from 'react'


export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-montserat h-28">
        <a href="/" className="logo">
          <h2 className='md:text-4xl text-3xl font-montserat font-bold'>
            Baby Cake
          </h2>
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-12 items-center">
            <li><a href="#about" className="hover:text-seagreen-100 cursor-pointer">About</a></li>
            <li><a href="#tokenomics" className="hover:text-seagreen-100 cursor-pointer">Tokenomics</a></li>
            <li><a href="/" className="hover:text-seagreen-100 cursor-pointer">Chart</a></li>
            <li><a href="/" className="hover:text-seagreen-100 cursor-pointer">Telegram</a></li>
          </ul>
        </nav>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-nutino-sans">
        <a href="/" className="logo w-1/2">
          <h2 className='md:text-4xl text-3xl font-montserat font-bold'>
            Baby Cake
          </h2>
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-montserat font-semibold bg-purple-50 z-20" style={{ left: "0" }}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <a href="/" className="logo">
              <h2 className='md:text-4xl text-3xl text-white-100 font-montserat font-bold'>
                Baby Cake
              </h2>
            </a>
          </div>
        </div>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="#about" className="text-lg ml-4 text-white-100 font-semibold">About</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="#tokenomics" className="text-lg ml-4 text-white-100 font-semibold">Tokenomics</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <a href="/" className="text-lg ml-4 text-white-100 font-semibold">Chart</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <a href="/" className="text-lg ml-4 text-white-100 font-semibold">Telegram</a>
        </button>
      </div> : null
      }


    </header >
  )
}
