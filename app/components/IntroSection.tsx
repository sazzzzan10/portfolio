"use client";
import { delayUntilRuntimeStage } from 'next/dist/server/app-render/dynamic-rendering';
import Image from 'next/image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const IntroSection = ()=>{
    return (
        <section id="home" className="relative pt-36 pb-24">
            <div className="mt-12 md:mt-24">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className='relative flex justify-center md:justify-end'>
                        <div className='pointer-events-none absolute -inset-12 md:-inset-18 rounded-full bg-linear-to-b from-[#7c3aed] vali-[#6d28d9]/30 to-transparent blur-3xl opacity-90'>
                        </div>

                       <div className="rounded-[20px]  animate-bounce z-1000 absolute bg-gray-800 px-4 py-2 -top-2 -right-[50%] ">
                        Hello! I'm Sajan Amatya
                        <div className="absolute  -bottom-0.5 translate-y-[50%] left-2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent rotate-180 border-b-[15px] border-b-gray-800" ></div>
                       </div>
                                    <div>  <Image src={"/images/sajan.jpeg"} alt="arrow"  className="z-100 rounded-full relative " height={240} width={240} priority/>                                          
</div> </div>
                    <div className="md:pl-2 text-center md:text-left">
                        <p className='text-sm md:text-base text-white/60 mb-2'>A Developer who</p>
                        <h1 className="text-4xl sm:text-3xl font-normal traking-ight leading-[1.15]">
                            <span className="block">Judges a book</span>
                            <span className="block">by its {" "}
                            <span className="relative inline-block align-baseline"> 
                                <span className='relative z-10 text-[#71276A]'>{}cover</span>
                                {/* <span className="pointer-events-none translate-y-1 absolute -inset-x-2 -inset-y-2 -z-10 rotate-12">
                                    <Image src={"/images/hero-fg.png"} alt="arrow" fill className="object-fit" priority/>
                                </span> */}
                                ...</span>

                            </span>
                            

                        </h1>
                        <p className='mt-2 text-[10px] md:text-xs text-white/50 max-w-md md:max-w-lg mx-auto md:mx-0'>
                        Because if the cover does not impress you what else can?
                        </p>
                    </div>
                </div>
                <div className="mt-16 max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-right">
                        <Typewriter
                            words={["I'm a Software Engineer", "I'm a Mobile & Frontend Developer", "I'm an AI enthusiast"]}
                            typeSpeed={65}
                            loop
                            deleteSpeed={0}
                            delaySpeed={1200}
                            />
                    </h2>
                    <p>Currently, I'm a Software Engineer at</p>
                </div>
            </div>
        </section>
    )
}

export default IntroSection;