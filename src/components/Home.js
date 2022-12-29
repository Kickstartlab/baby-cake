import React from 'react'
import Menu from './Menu'
import dog_1 from '../assets/dog_1.png';
import video from '../assets/video.mp4';
import dog from '../assets/dog.png';
import token_1 from '../assets/token_1.png';
import token_2 from '../assets/token_2.png';
import token_3 from '../assets/token_3.png';
import team from '../assets/team.png';
import nft from '../assets/nft.png';
import Footer from './Footer';


export default function Home() {

    return (
        <div className="">

            {/* top section */}

            <div className="lg:px-20 px-5 container mx-auto relative z-20">
                <Menu />

                <video width="1297" height="654" controls className='rounded-4xl my-8'>
                    <source src={video} type="video/mp4" />
                    Error Message
                </video>

                <div className="lg:flex block justify-between py-12 my-12 bg-path bg-purple">

                    <div className="lg:w-1/3 w-full">
                        <h1 className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                            Stand Out
                            from The Crowd.
                        </h1>

                        <p className='py-8 leading-loose font-montserat text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

                        <div className="button font-montserat">
                            <a href="/">
                                <button className="bg-purple-100 hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100 cursor-pointer text-white-100 py-3 px-8 rounded-md font-semibold">
                                    Get PUG
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="img md:mt-0 mt-12 font-montserat">

                        <div className='flex gap-3 p-5 bg-white-100 rounded-lg w-42 font-semibold'>
                            <img src={dog_1} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            {/* who we are */}

            <div className="">
                <div className="bg-dog font-montserat bg-blue-100">
                    <div className=" py-20 lg:px-20 px-5 container mx-auto block lg:flex justify-between items-center">

                        <div className='lg:w-1/2 w-full'>

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

                        <div className="lg:w-1/2 w-full">
                            <img src={dog} alt="" className='lg:w-10/12 w-full lg:float-right' />
                        </div>
                    </div>
                </div>
            </div>

            {/* tokenomics*/}

            <div className="bg-white-50 font-montserat">
                <div className=" py-20 lg:px-20 px-5 container mx-auto">

                    <div>

                        <h2 className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                            Tokenomics
                        </h2>

                        <div className='hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center pt-12 pb-3'>

                            <h2 className='text-3xl font-montserat font-bold text-blue-100'>
                                TAX: 50%
                            </h2>

                            <h2 className='text-3xl font-montserat font-bold text-blue-100'>
                                TAX: 50%
                            </h2>

                            <h2 className='text-3xl font-montserat font-bold text-blue-100'>
                                TAX: 50%
                            </h2>

                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center bg-white-100 py-8 rounded-3xl">

                            <div className='text-center'>
                                <img src={token_1} alt="" className='w-10/12' />
                                <h2 className='text-xl font-montserat font-semibold pt-8 text-blue-100 italic'>
                                    Presale
                                </h2>
                            </div>
                            <div className='text-center'>
                                <img src={token_2} alt="" className='w-10/12' />
                                <h2 className='text-xl font-montserat font-semibold pt-8 text-blue-100 italic'>
                                    Presale
                                </h2>
                            </div>
                            <div className='text-center'>
                                <img src={token_3} alt="" className='w-10/12' />
                                <h2 className='text-xl font-montserat font-semibold pt-8 text-blue-100 italic'>
                                    Presale
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
                                <div className="rounded-3xl p-8 text-center shadow-2xl bg-yellow-100">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl p-8 text-center bg-zinc-100 shadow-2xl">
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

                            <div className="flex flex-col py-16 lg:py-0">
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
                                <div className="rounded-3xl p-8 text-center bg-purple-20 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl p-8 text-center bg-zinc-200  shadow-2xl">
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

                            <h2 className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                                How to get your own pug
                            </h2>

                            <button className="bg-purple-100 hover:bg-white-50 border-2 border-purple-100 hover:text-purple-100 cursor-pointer text-white-100 py-3 px-8 rounded-md font-semibold">
                                Buy Now
                            </button>

                        </div>

                        <p className="leading-loose py-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <h2 className='md:text-4xl text-3xl font-montserat font-bold mt-5'>
                            Getting your Pug is as easy as it gets
                        </h2>

                        <p className='py-8 leading-loose font-montserat'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>

                        <p className='leading-loose font-montserat'>
                            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna
                        </p>

                    </div>

                    {/* pug ecosystem */}

                    <div className="lg:py-20 py-5">

                        <div className="">

                            <h2 className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                                How to get your own pug
                            </h2>

                            <p className="leading-loose py-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="lg:grid grid-col-1 lg:grid-cols-3 items-center justify-between gap-24 mt-12">

                            <div className="flex flex-col gap-16">
                                <div className="rounded-3xl p-8 text-center shadow-2xl bg-yellow-100">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <p className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-3xl p-8 text-center bg-yellow-100 shadow-2xl">
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
                                <div className="rounded-3xl p-8 text-center bg-yellow-100 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl p-8 text-center bg-yellow-100 shadow-2xl">
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
                                <div className="rounded-3xl p-8 text-center bg-yellow-100 shadow-2xl">
                                    <div className="p-5">
                                        <h4 className="text-2xl font-bold">
                                            ABCD
                                        </h4>
                                        <div className="leading-loose py-8">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl p-8 text-center bg-yellow-100  shadow-2xl">
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

            <div className=" bg-blue-100">
                <div className="font-montserat bg-dog">
                    <div className=" py-20 lg:px-20 px-5 container mx-auto block lg:flex justify-between items-center">

                        <div className='lg:w-1/2 w-full'>

                            <h2 className='md:text-6xl text-3xl font-montserat font-bold text-white-100'>
                                Pug Roadmap
                            </h2>

                            <p className='py-8 leading-loose font-montserat text-white-100'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>

                        </div>

                        <div className="lg:w-1/2 w-full">
                            <img src={dog} alt="" className='lg:w-8/12 w-full lg:float-right' />
                        </div>
                    </div>
                </div>
            </div>

            {/* pug nft */}

            <div className="bg-white-100 font-montserat">
                <div className=" py-20 container mx-auto">

                    <div className='lg:px-20 px-5 '>

                        <h2 className='md:text-6xl text-3xl font-montserat font-bold text-blue-100'>
                            Pug NFT’s
                        </h2>

                        <p className="text-gray-100 leding-loose py-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, <br></br>dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, <br></br>risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                        </p>


                    </div>

                    <img src={nft} alt="" />

                    <div className="lg:px-20 px-5">

                        <div className="py-12 rounded-2xl bg-path_1 bg-purple-100">

                            <h4 className="text-3xl py-8 font-bold text-center text-white-100 p-3">
                                A dream team building a curated<br></br> marketplace for you.
                            </h4>


                            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-12 px-8 ">

                                <div className='text-center'>
                                    <img src={team} alt="" className='' />
                                </div>

                                <div className='text-center'>
                                    <img src={team} alt="" className='' />
                                </div>

                                <div className='text-center'>
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
