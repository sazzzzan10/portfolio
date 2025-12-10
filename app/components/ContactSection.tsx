"use client";
import { delayUntilRuntimeStage } from 'next/dist/server/app-render/dynamic-rendering';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import ScrollReveal from './ScrollReveal';
import { Resend } from 'resend';
import {  useActionState } from 'react';
import { formAction } from '../actions/formAction';

type FormState = {
  message: string;
  success: boolean;
  fullName: string | null;
  email: string | null;
  data: string | null;
};

const initialState: FormState ={
  success: false,
  message: "",
  fullName: "",
  email: "",
    data:""
}
const ContactSection = ()=>{
  // const [state, action, isPending] = useActionState<FormState>(
  //   formAction,
  //   initialState
  // );    
  // // async function send({data, email, fullName}:sendProps) {
        const [state, action, isPending] = useActionState(formAction, { message: "" });
    // }
    return (
      <>
        <section id="contact" className="py-2 pb-12">
        <ScrollReveal stagger={0.15} className="">
                      <h3 className="text-3xl md:text-3xl font-semibold text-white/90 mb-7">
                Contact</h3>
            <div className="flex md:flex-row flex-col gap-12 justify-between text-white-200 order-1">
            <div className="flex-4 order-2 md:order-1">
            <div>
    
                <p className="text-md text-white/60 max-w-xl md:mt-4">I am always eager to contribute to new projects. You can contact me at </p>
                <div className="mt-2 text-white/80">
                <Link href="mailto:sajanamatya10@gmail.com" className="hover:text-[#a855f7] mb-4">sajanamatya10[at]gmail[dot]com</Link>
                </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/80">
            <Link href="https://www.linkedin.com/in/sajan-amatya" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7]">
            <FaLinkedin className="size-6"/>
            </Link>
            <Link href="https://www.instagram.com/sajan.amatya" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7]">
            <FaInstagram className="size-6"/>
            </Link>
            </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
            <form action={action} className=" ">
                <input name="fullName" placeholder="Full Name" className="bg-gray-800 p-2 rounded-lg md:m-2 my-2 mt-4 mr-2" required/>
                <input type="email" name="email" placeholder="Email" className="bg-gray-800 p-2 rounded-lg  md:m-2 my-2" required/>
                <textarea placeholder="Details..." name="data" className="bg-gray-800 p-2 rounded-lg  md:m-2 my-2" rows={4} cols={45} required/><br></br>
                      <button type="submit"  className="hover:cursor-pointer bg-gray-800 p-2 rounded-lg  md:m-2 my-2" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>
      {
      state.message && (
        <p className={"text-white-200 p-2"}>
            {state.message}
        </p>
      )}
            </form>
            </div>
            </div>

        </ScrollReveal>
        </section>
       </>
    )
}

export default ContactSection;