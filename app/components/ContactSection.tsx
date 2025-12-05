"use client";
import { delayUntilRuntimeStage } from 'next/dist/server/app-render/dynamic-rendering';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const ContactSection = ()=>{
    return (
        <section id="contact" className="py-24 relative">
            <div>
                <h3 className="text-3xl md:text-3xl font-semibold text-white/90 mb-7">
                Contact</h3>
                <p className="text-md text-white/60 max-w-xl">I am always eager to contribute to new projects. You can contact me at </p>
                <div className="mt-2 text-white/80">
                <Link href="mailto:renukashrestha492@gmail.com" className="hover:text-[#a855f7]">renukashrestha492@gmail.com</Link>
                </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/80">
            <Link href="https://www.linkedin.com/in/renuka-shrestha-b0280b315" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7]">
            <FaLinkedin className="size-6"/>
            </Link>
            <Link href="https://www.instagram.com/renu_stha05" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7]">
            <FaInstagram className="size-6"/>
            </Link>
            </div>
        </section>
    )
}

export default ContactSection;