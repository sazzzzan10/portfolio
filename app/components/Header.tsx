"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header = ()=>{
    const [isScrolled, setIsScrolled]=useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        const onScroll = () => setIsScrolled(window.scrollY > 0)
        onScroll();
        window.addEventListener('scroll', onScroll, {passive:true});
        return () =>{
            window.removeEventListener('scroll', onScroll);
        }
    },[])
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled } || isOpen ? 'bg-[#0b0416]/70 background-blur-md shadow-[0_0_40px_rgba(113, 39,186,0.20)]':'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="#" className="text-3xl font-extrabold text-[#7e22ce] flex-1">E</Link>
            <nav className="md:flex justify-around space-x-10 font-medium text-lg text-white/80">
                <Link href="#home" className="hover:text-[#a855f7] transition duration-200">Home</Link>
                <Link href="#home" className="hover:text-[#a855f7] transition duration-200">About</Link>
                <Link href="#home" className="hover:text-[#a855f7] transition duration-200">Projects</Link>
                <Link href="#home" className="hover:text-[#a855f7] transition duration-200">Experience</Link> 
                <Link href="#home" className="hover:text-[#a855f7] transition duration-200">Contact</Link> 

            </nav>
            </div>
        </header>
    )
}

export default Header;