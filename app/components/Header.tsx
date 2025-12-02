"use client";
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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled } || isOpen ? 'bg-[#0b0416]/70 background-blur-md shadow-[0_0_40px_rgba(113, 39,186,0.20)]':'bg-transparent'}`}>Header</header>
    )
}

export default Header;