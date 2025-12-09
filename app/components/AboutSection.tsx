"use client";
import { delayUntilRuntimeStage } from 'next/dist/server/app-render/dynamic-rendering';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import ScrollReveal from './ScrollReveal';

const AboutSection = ()=>{
    return (
        <section id="contact" className=" relative">
            <ScrollReveal stagger={0.2} >
                <h3 className="text-3xl md:text-3xl font-semibold text-white/90 mb-7">
                About me</h3>
                 <div className='bg-linear-to-r from-[#800000]/30 vai-[#6d28d9]/30  pointer-events-none absolute -inset-12 md:top-[30%] md:bottom-[0%] md:right-0 md:left-0 rounded-2xl  to-transparent p-4 mt-2 blur-lg  rounded-lg absolute '></div>
                          <div className='bg-linear-to-r from-gray-800/60 to-transparent p-4 mt-2 rounded-lg gradient hover:shadow-[0_0_60px_rgba(128,0,0,0.6)]'>A computer enthusiast having 5+ years of experience in software development specialized in front‑end, embedded systems and drone technology.
Knowledgeable about cloud computing solutions and data science/machine learning technologies.</div>

            </ScrollReveal>
        </section>
    )
}

export default AboutSection;