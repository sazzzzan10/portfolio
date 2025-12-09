"use client";
import { delayUntilRuntimeStage } from 'next/dist/server/app-render/dynamic-rendering';
import Image from 'next/image';
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {skillItems} from '../util/data';
import ScrollReveal from './ScrollReveal';

const TechStack = ()=>{

    const [selectedSkill, setSelectedSkill]=useState('');
    return (
        <section id="tech" className="mt-12 ">
                 <h3 className="text-3xl md:text-3xl font-semibold text-white/90 mb-7 text-left ">Skills</h3>
                 <ScrollReveal stagger={0.2}  className='relative'>
                                        <div className=' pointer-events-none absolute -inset-12 md:-inset-16 rounded-full bg-linear-to-t from-[#800000]/50 vai-[#6d28d9]/30 to-transparent blur-3xl '>
</div>
            <div className="text-center">
                {/* <p className='text-white mb-6 text-left'>
                I have worked with projects including techstacks like</p> */}
                <p className='text-white mb-12 text-left'>I possess strong proficiency and strong expertise in the following areas:</p>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:max-w-[600px]  m-auto">

                {       skillItems.map((skill)=>{
                        return (
                        <div key={skill.name}  onClick={()=>{setSelectedSkill(skill.name)}} className='group rounded-full z-10  hover:shadow-[0_0_40px_rgba(128,0,0,0.8)]
                    focus:shadow-[0_0_40px_rgba(128,0,0,0.8)]  p-2 bg-gray-400 content-center w-[54px] h-[54px]'>
                        {selectedSkill===skill.name ?  <Image   alt={skill.name} src={`${skill.image}`}  width={50} height={50} className='group-hover:grayscale-0 grayscale-0'/>: <Image   alt={skill.name} src={`${skill.image}`}  width={50} height={50} className='group-hover:grayscale-0 grayscale'/>}
                       
                        <span className=" hidden bg-black/80 -bottom-14 left-[50%] -translate-x-[75%] text-center absolute hidden-comp group-hover:block p-2 rounded-xl text-white/70 text-center z-100 ">{skill.name}</span>
                        </div>)
                    })
                }
                            </div>

            </div>
            </ScrollReveal>
        </section>
    )
}

export default TechStack;