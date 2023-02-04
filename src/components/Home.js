import React from 'react'
import Menu from './Menu'
import dog_2 from '../assets/dog_2.png';
import logo_1 from '../assets/logo_1.png';
import dog from '../assets/dog.png';
import dog_1 from '../assets/dog_1.png';
import token_1 from '../assets/token_1.png';
import token_2 from '../assets/token_2.png';
import token_3 from '../assets/token_3.png';
import team from '../assets/team.png';
import bg_top from '../assets/bg-top.png';
import nft from '../assets/nft.png';
import roadmap from '../assets/roadmap.png';
import Footer from './Footer';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3500,
            once: true,
            delay: 50
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
                            Stand Out
                            from The Crowd.
                        </h2>

                        <p className='py-8 leading-loose font-montserat text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

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
                                We Welcome you
                                on this adventure!
                            </h2>

                            <p className='py-8 leading-loose font-montserat text-white-100'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                            </p>

                            <p className='leading-loose font-montserat text-white-100'>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                            </p>

                            <h2 className='pt-8 text-3xl font-montserat font-bold text-white-100'>
                                Story time
                            </h2>

                            <p className='py-8 leading-loose font-montserat text-white-100'>
                                Once upon a time, there lived a pug. He was a curious little pup who loved to explore the world around him. One day, pug was taking a stroll through the park when he spotted a tall man with a big smile. It was Elon Musk, the famous inventor and entrepreneur. Pug was so excited that he could hardly contain himself. Elon noticed Pug and his enthusiasm and immediately knelt down to pet him. The two shared an instant connection, and Elon asked Pug if he wanted to join him on his next adventure. Elon took Pug with him all over the world, from the heights of the Rocky Mountains to the Pug of the Amazon rainforest. Pug got to experience all kinds of exciting places and meet some incredible people. By the end of their trip, PUG and Elon had become great friends. Whenever Elon had a new invention or idea, he would always turn to PUG for advice.
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

                        <div className='hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center pt-12 pb-3'>

                            <h2 className='text-3xl font-montserat font-bold text-blue-100'>
                                TAX: 50%
                            </h2>

                            <h2 className='text-3xl font-montserat font-bold text-blue-100'>
                                Negative Tax: 5%
                            </h2>

                            <h2 className='text-3xl font-montserat font-bold text-blue-100'>
                                TAX: 50%
                            </h2>

                        </div>

                        <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-3 place-items-center bg-yellow-200 py-8 rounded-3xl shadow-2xl mt-3">

                            <div className='text-center'>
                                <img src={token_1} alt="" className='w-10/12' />
                                <h2 className='text-xl font-montserat font-semibold pt-8 text-blue-100 italic'>
                                    Presale
                                </h2>
                            </div>
                            <div className='text-center'>
                                <img src={token_2} alt="" className='w-10/12' />
                                <h2 className='text-xl font-montserat font-semibold pt-8 text-blue-100 italic'>
                                    Liquidity
                                </h2>
                            </div>
                            <div className='text-center'>
                                <img src={token_3} alt="" className='w-10/12' />
                                <h2 className='text-xl font-montserat font-semibold pt-8 text-blue-100 italic'>
                                    Burn
                                </h2>
                            </div>

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

                            <div className="flex flex-col gap-16 py-16 lg:py-0">
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
                                Pug Roadmap
                            </h2>

                            <p className='py-8 leading-loose font-montserat text-white-100'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>

                        </div>

                        <div data-aos="zoom-out" className="lg:w-1/2 w-full">
                            <img src={dog} alt="" className='lg:float-right -mt-12 lg:block hidden' />
                        </div>
                    </div>

                    <img data-aos="zoom-in" src={roadmap} alt="" className='flex mx-auto lg:pt-8' />
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

                                <div data-aos="zoom-in" className='text-center'>
                                    <img src={team} alt="" className='' />
                                </div>

                                <div data-aos="zoom-in" className='text-center'>
                                    <img src={team} alt="" className='' />
                                </div>

                                <div data-aos="zoom-in" className='text-center'>
                                    <img src={team} alt="" className='' />
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
