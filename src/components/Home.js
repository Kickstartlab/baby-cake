import React from 'react'
import Menu from './Menu'
import dog_2 from '../assets/dog_2.png';
import logo_1 from '../assets/logo_1.png';
import dog from '../assets/dog.png';
import dog_1 from '../assets/dog_1.png';
import team_1 from '../assets/team_1.jpg';
import team_2 from '../assets/team_2.jpg';
import team_3 from '../assets/team_3.jpg';
import nft from '../assets/nft.png';
import Footer from './Footer';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import ProgressBar from './ProgressBar';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 2500,
            once: true,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="overflow-hidden">

            {/* top section */}

            <div className="lg:px-20 px-5 container mx-auto">
                <Menu />

                <div className="bg-top py-12 flex flex-col items-center justify-center gap-y-8">
                    <img src={logo_1} alt="" className='' />

                    <h1 className='md:text-7xl text-3xl font-montserat font-bold text-white-100'>
                        Baby Cake 2.0
                    </h1>

                </div>

                <div className="lg:flex block justify-between items-center py-12 my-12 bg-path">

                    <div data-aos="fade-right" className="lg:w-1/2 w-full">
                        <h2 className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                            Do you love to stack up $CAKE?
                        </h2>

                        <p className='py-8 leading-loose font-montserat text-gray-100'>
                            Baby Cake 2.0 offers you massive cake rewards just by holding. Be a part of this amazing journey with us
                        </p>

                        <div className="button font-montserat">
                            <a href="/">
                                <button className="bg-purple-100 hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100 cursor-pointer text-white-100 py-3 px-8 rounded-md font-semibold">
                                    Get Pancake
                                </button>
                            </a>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="img md:mt-0 mt-12 font-montserat">

                        <div className='flex gap-3 p-5 bg-white-100 rounded-lg w-42 font-semibold'>
                            <img src={dog_2} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            {/* who we are */}

            <div id='about' className="">
                <div className="bg-dog-2 font-montserat bg-brown-100">
                    <div className=" py-20 lg:px-20 px-5 container mx-auto block lg:flex justify-between items-center">

                        <div data-aos="fade-right" className='lg:w-1/2 w-full'>

                            <h2 className='md:text-6xl text-3xl font-montserat font-bold text-white-100'>
                                About Baby Cake 2.0
                            </h2>

                            <p className='py-8 leading-loose font-montserat text-white-100'>
                                Baby Cake 2.0 is a meme utility project which is a prototype of the BabyCake token which did about a 100 million mcap a while ago.
                                Baby cake 2.0 aims to give those who missed baby cake token the opportunity to make such gains again. The dev of BabyCake 2.0 is Hitman supported by a team of chads who are safe and well known in the defi space.
                            </p>

                            <p className='leading-loose font-montserat text-white-100'>
                                BabyCake 2.0 has its own Dex swap and much more utility coming including Nfts and others. Babycake 2.0 is a token that gives out huge Cake rewards to holders based on Volume.
                            </p>

                            <button className="bg-purple-100 hover:bg-blue-100 border-2 border-purple-100 hover:text-purple-100 cursor-pointer text-white-100 py-3 px-8 rounded-md font-semibold">
                                Contact Us
                            </button>
                        </div>

                        <div data-aos="zoom-out" className="lg:w-1/2 w-full">
                            <img src={dog_1} alt="" className='lg:w-10/12' />
                        </div>
                    </div>
                </div>
            </div>

            {/* tokenomics*/}

            <div id='tokenomics' className="bg-yellow-50 font-montserat">
                <div className=" py-20 lg:px-20 px-5 container mx-auto">

                    <div>

                        <h2 data-aos="fade-down" className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                            Tokenomics
                        </h2>

                        <div className='hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-baseline text-center pt-12 pb-3'>

                            <h2 className='text-2xl font-montserat font-bold text-blue-100'>
                                Total supply: 1.000.000 BCAKE
                            </h2>

                            <h2 className='text-2xl font-montserat font-bold text-blue-100'>
                                Max wallet: 2% (20.000 BCAKE)
                            </h2>

                            <h2 className='text-2xl font-montserat font-bold text-blue-100'>
                                Max transaction: 2% (20.000 BCAKE)
                            </h2>

                        </div>

                        <div data-aos="fade-up" className="bg-yellow-200 p-8 rounded-3xl shadow-2xl mt-3">

                            <ProgressBar />


                        </div>

                    </div>

                    {/* our values */}

                    <div className="py-16">
                        <h2 className='text-3xl font-montserat font-bold'>
                            Our Values
                        </h2>

                        <div className="lg:grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-24 mt-12">

                            <div className="flex flex-col gap-16">
                                <div data-aos="fade-down" className="rounded-3xl p-8 text-center shadow-2xl bg-yellow-100">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up" className="rounded-3xl p-8 text-center bg-zinc-100 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-out" className="flex flex-col py-16 lg:py-0">
                                <div className="rounded-3xl p-8 text-center bg-zinc-50 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-16">
                                <div data-aos="fade-down" className="rounded-3xl p-8 text-center bg-purple-20 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up" className="rounded-3xl p-8 text-center bg-zinc-200  shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* how to buy */}

                    <div className="lg:py-20 py-5">

                        <div className="lg:flex justify-between">

                            <h2 data-aos="fade-down" className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                                How to get your own Pancake
                            </h2>

                            <button data-aos="zoom-out" className="bg-purple-100 hover:bg-white-50 border-2 border-purple-100 hover:text-purple-100 cursor-pointer text-white-100 py-3 px-8 rounded-md font-semibold">
                                Buy Now
                            </button>

                        </div>

                        <p className="leading-loose py-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <h2 data-aos="fade-right" className='md:text-4xl text-3xl font-montserat font-bold mt-5'>
                            Getting your Pancake is as easy as it gets
                        </h2>

                        <p data-aos="fade-left" className='py-8 leading-loose font-montserat'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>

                        <p data-aos="fade-right" className='leading-loose font-montserat'>
                            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna
                        </p>

                    </div>

                    {/* pug ecosystem */}

                    <div className="lg:py-20 py-5">

                        <div className="">

                            <h2 className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                                Pancake ecosystem
                            </h2>

                            <p className="leading-loose py-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="lg:grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-24 mt-12">

                            <div className="flex flex-col gap-16">
                                <div data-aos="zoom-out" className="rounded-3xl p-8 text-center shadow-2xl bg-purple-50">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <p className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </p>
                                    </div>
                                </div>

                                <div data-aos="zoom-out" className="rounded-3xl p-8 text-center bg-purple-50 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-16 py-16 lg:py-0">
                                <div data-aos="zoom-out" className="rounded-3xl p-8 text-center bg-purple-50 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-out" className="rounded-3xl p-8 text-center bg-purple-50 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-16">
                                <div data-aos="zoom-out" className="rounded-3xl p-8 text-center bg-purple-50 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-out" className="rounded-3xl p-8 text-center bg-purple-50  shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* roadmap */}

            <div id='roadmap' className=" bg-brown-100">
                <div className="font-montserat bg-dog lg:px-20 px-5 py-20">
                    <div className=" container mx-auto block lg:flex justify-between items-center">

                        <div className='lg:w-1/2 w-full'>

                            <h2 data-aos="fade-right" className='md:text-6xl text-3xl font-montserat font-bold text-white-100'>
                                Baby Cake Roadmap
                            </h2>

                        </div>

                        <div data-aos="zoom-out" className="lg:w-1/2 w-full">
                            <img src={dog} alt="" className='lg:float-right -mt-12 lg:block hidden' />
                        </div>
                    </div>

                    <div className="relative text-white-100 font-montserat text-sm font-semibold pt-6">

                        <div className="hidden lg:block w-1 ml-2 bg-seagreen-200 absolute h-full left-1/2 transform -translate-x-1/2 line"></div>

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div data-aos="fade-right" className="flex justify-start w-full mx-auto items-center lg:ml-52">
                                    <div className="w-full sm:w-80 sm:mr-8 p-5 border rounded-2xl shadow space-y-5">

                                        <h4 className="text-2xl font-semibold">
                                            Phase 1
                                        </h4>
                                        <ul className="list-disc ml-5 text-lg font-medium">
                                            <li>Stealth Launch</li>
                                            <li>
                                                Community Building
                                            </li>
                                            <li>
                                                Website Creation
                                            </li>
                                            <li>
                                                Social Media launch
                                            </li>
                                            <li>
                                                100 holders
                                            </li>
                                            <li>
                                                Coin listings
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="lg:block hidden absolute border-b-2 border-seagreen-200 right-1/2 mr-4 px-3 w-8">

                                </div>

                                <div className="lg:block hidden absolute left-1/2 -ml-1">

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#15BFFD" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div data-aos="fade-left" className="flex justify-end w-full mx-auto items-center lg:mr-36">
                                    <div className="w-full sm:w-80 sm:mr-8 p-5 border rounded-2xl shadow space-y-5">

                                        <h4 className="text-2xl font-semibold">
                                            Phase 2
                                        </h4>
                                        <ul className="list-disc ml-5 text-lg font-medium">
                                            <li>Whitepaper release</li>
                                            <li>
                                                Trending everywhere
                                            </li>
                                            <li>
                                                Giveaways
                                            </li>
                                            <li>
                                                Listing on CoinGecko and CoinMarketCap
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="lg:block hidden absolute border-b-2 border-seagreen-200 left-1/2 ml-12 px-3 w-8">

                                </div>

                                <div className="lg:block hidden absolute left-1/2 -ml-1">

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#15BFFD" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div data-aos="fade-right" className="flex justify-start w-full mx-auto items-center lg:ml-52">
                                    <div className="w-full sm:w-80 sm:mr-8 p-5 border rounded-2xl shadow space-y-5">

                                        <h4 className="text-2xl font-semibold">
                                            Phase 3
                                        </h4>
                                        <ul className="list-disc ml-5 text-lg font-medium">
                                            <li>
                                                Big Partnerships
                                            </li>
                                            <li>
                                                Listing on Major Exchanges
                                            </li>
                                            <li>
                                                Influencer Marketing Push
                                            </li>
                                            <li>
                                                Further Partnerships
                                            </li>
                                            <li>
                                                NFT and Games
                                            </li>
                                            <li>
                                                Further Ecosystem Development
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="lg:block hidden absolute border-b-2 border-seagreen-200 right-1/2 mr-4 px-3 w-8">

                                </div>

                                <div className="lg:block hidden absolute left-1/2 -ml-1">

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#15BFFD" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* pug nft */}

            <div id='nft' className="bg-white-100 font-montserat">
                <div className=" py-20 container mx-auto">

                    <div className='lg:px-20 px-5 '>

                        <h2 className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                            Pug NFT’s
                        </h2>

                        <p className="text-gray-100 leding-loose py-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, <br></br>dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, <br></br>risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                        </p>


                    </div>

                    <img src={nft} alt="" data-aos="zoom-out" />

                    <div className="lg:px-20 px-5">

                        <div className="py-12 rounded-2xl bg-brown-200">

                            <h4 className="text-3xl py-8 font-bold text-center text-white-100 p-3">
                                A dream team building a curated<br></br> marketplace for you.
                            </h4>


                            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-12 px-8 ">

                                <div data-aos="zoom-in" className='text-center bg-white-100 p-3 rounded-2xl'>
                                    <img src={team_1} alt="" className='rounded-md' />
                                    <p className="text-blue-100 font-xl font-semibold pt-3">
                                        Hecker ( Marketing Manager )
                                    </p>
                                </div>

                                <div data-aos="zoom-in" className='text-center bg-white-100 p-3 rounded-2xl'>
                                    <img src={team_2} alt="" className='rounded-md' />
                                    <p className="text-blue-100 font-xl font-semibold pt-3">
                                        Graphic Designer ( Busded )
                                    </p>
                                </div>

                                <div data-aos="zoom-in" className='text-center bg-white-100 p-3 rounded-2xl'>
                                    <img src={team_3} alt="" className='rounded-md' />
                                    <p className="text-blue-100 font-xl font-semibold pt-3">
                                        Hitman ( Owner / DEV)
                                    </p>
                                </div>

                            </div>

                            <div className="mt-8 px-8 text-white-100 border-t border-white-50">

                                <div className="pt-6 px-5 lg:flex justify-between items-center">
                                    <h3 className="text-white font-bold md:text-5xl text-2xl">
                                        Get your<br></br>
                                        pub today!
                                    </h3>

                                    <h3 className="text-white font-bold md:text-3xl text-2xl">
                                        Get the whitepaper
                                    </h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div >
    )
}
