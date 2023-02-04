import React from 'react'
import logo from '../assets/logo.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';



export default function Footer() {
  return (
    <footer className='container font-montserat mx-auto lg:px-20 px-5 text-gray-100 bg-footer'>

      <div className="text-center">
        <img data-aos="zoom-out" src={logo} alt="pug Inu" className='flex mx-auto'/>

        <div className="pb-8 pt-3">
          <div className="text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunca <br></br> vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
        </div>

        <nav>
          <ul className="text-md lg:flex justify-center gap-12 items-center py-5">
            <li><a href="#about" className="italic">About</a></li>
            <li><a href="#tokenomics" className="italic">Tokenomics</a></li>
            <li><a href="#nft" className="italic">Chart</a></li>
            <li><a href="#roadmap" className="italic">Rodmap</a></li>
          </ul>
        </nav>
      </div>


      <hr className='text-gray-100'/>

      <div className="lg:flex justify-between items-center py-5 px-2">
        <p> Copyright, Baby-Cake - {new Date().getFullYear()}. All rights reserved</p>

        <div className='flex gap-6 items-center mt-5 lg:mt-0'>
          <p>Follow Us</p>
          <a href='/'><img src={discord} alt="" /></a>
          <a href='/'><img src={telegram} alt="" /></a>
          <a href='/'><img src={twitter} alt="" /></a>
        </div>
      </div>
    </footer>
  )
}
