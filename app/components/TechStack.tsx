"use client";
import { delayUntilRuntimeStage } from 'next/dist/server/app-render/dynamic-rendering';
import Image from 'next/image';
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import skillItems from '../util/data';

const TechStack = ()=>{

    const [selectedSkill, setSelectedSkill]=useState('');
    return (
        <section id="" className="relative md:p-28 p-24">Skills
                                        <div className='translate-y-16 pointer-events-none absolute -inset-12 md:-inset-18 rounded-full bg-linear-to-b from-[#7c3aed] vai-[#6d28d9]/30 to-transparent blur-3xl opacity-90'>
</div>
            <div className="text-center">
                <p className='text-white mb-6'>
                I have worked with projects including techstacks like</p>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:max-w-[600px]  m-auto">

                {       skillItems.map((skill)=>{
                        return (
                        <div key={skill.name}  onClick={()=>{setSelectedSkill(skill.name)}} className='group rounded-full z-10   p-2 bg-gray-400 content-center w-[54px]'>
                        {selectedSkill===skill.name ?  <Image   alt={skill.name} src={`${skill.image}`}  width={50} height={50} className='group-hover:grayscale-0 grayscale-0'/>: <Image   alt={skill.name} src={`${skill.image}`}  width={50} height={50} className='group-hover:grayscale-0 grayscale'/>}
                       
                        <span className=" hidden bg-black/80 bottom-14 left-[50%] -translate-x-[75%] text-center absolute hidden-comp group-hover:block p-2 rounded-xl text-white/70 text-center z-100 ">{skill.name}</span>
                        </div>)
                    })
                }
                            </div>

            </div>
        </section>
    )
}

export default TechStack;