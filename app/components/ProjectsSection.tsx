
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const ProjectsSection = () =>{
    return (
        <section id="projects" className="relative py-28 space-y-24 ">
            {/* <div className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl" 
           
             /> */}
                                <h2 className="text-3xl sm:text-3xl font-semibold  md:text-3xl font-normal tracking-right">
                Projects</h2>
            <ScrollReveal stagger={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">
                <div className="flex flex-col">
                <h1 className="text-2xl sm:text-2xl font-normal tracking-light leading-[1.15]">
                OJT Surveying Project
                </h1>
                <div className="relative z-100  w-[100%]">
                    <div className='top-0 md:w-[135%] z-100 bg-gray-800/60 p-4 mt-2 rounded-lg'>An OJT training in construction surveying, gaining hand-on experience using a total station to measure angles, establish rederence points and support accurate site layout and alignment</div>
                </div>
                </div>
                <div className='relative p-0'>
                                            <div className='translate-y-10 pointer-events-none absolute -inset-12 md:-inset-18 rounded-4xl bg-linear-to-b from-[#800000] vai-[#6d28d9]/30 to-transparent blur-[80px] opacity-50 -z-10'></div>
                    <div className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c]  shadow-[0_0_90px_rgba(128, 0, 0, 0.28)] transition-transform duration-300 
                    hover:shadow-[0_0_40px_rgba(128,0,0,0.6)]
                    focus:hover:shadow-[0_0_40px_rgba(128,0,0,0.6)]">
   

                        <div className="overflow-hidden h-[360px]">
                                                              
                            <Image src="/images/theodolite.jpg" alt="abc" width={582} height={640} className="w-full h-auto duration-3000 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]" />

                        </div>
                    </div>
                </div>
            </ScrollReveal>

                        <ScrollReveal stagger={0.2} className=" grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">
                <div className="flex flex-col md:order-1" >
                <h1 className="text-2xl sm:text-2xl text-right font-normal tracking-light leading-[1.15]">
                Glam It Up
                </h1>
            
                    <div className='relative z-100  top-0 md:-left-[35%] md:w-[135%] z-100 bg-gray-800/60 p-4 mt-2 rounded-lg'>A simple website using HTML and CSS that displays makeup product details, featureing structured layouts, styled sections and user friendly presentation of product images, decriptions and pricing.</div>
                </div>
                <div className='relative p-0'>
                                            <div className='translate-y-10 pointer-events-none absolute -inset-12 md:-inset-18 rounded-4xl bg-linear-to-b from-[#800000] vai-[#6d28d9]/30 to-transparent blur-[80px] opacity-50 -z-10'></div>
                    <div className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c]  shadow-[0_0_90px_rgba(128, 0, 0, 0.28)] transition-transform duration-300 
                    hover:shadow-[0_0_40px_rgba(128,0,0,0.6)]
                    focus:hover:shadow-[0_0_40px_rgba(128,0,0,0.6)]">
   

                        <div className="overflow-hidden h-[360px]">
                                                              
                            <Image src="/images/glam.jpg" alt="abc" width={582} height={640} className="w-full h-auto duration-3000 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]" />

                        </div>
                    </div>
                </div>
            </ScrollReveal>
                        <ScrollReveal stagger={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">
                <div className="flex flex-col">
                <h1 className="text-2xl sm:text-2xl font-normal tracking-light leading-[1.15]">
                Book Tracker
                </h1>
                <div className="relative z-100  ">
                    <div className='top-0 md:w-[135%] z-100 bg-gray-800/90 p-4 mt-2 rounded-lg'>A library book tracking system using HTML, PHP, and MySQL that allows students to login, view their issued boks, and enter user-friendly presentation of product images, descriptions and pricing.</div>
                </div>
                </div>
                <div className='relative p-0'>
                                            <div className='translate-y-10 pointer-events-none absolute -inset-12 md:-inset-18 rounded-4xl bg-linear-to-b from-[#800000] vai-[#6d28d9]/30 to-transparent blur-[80px] opacity-50 -z-10'></div>
                    <div className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c]  shadow-[0_0_90px_rgba(128, 0, 0, 0.28)] transition-transform duration-300 
                    hover:shadow-[0_0_40px_rgba(128,0,0,0.6)]
                    focus:hover:shadow-[0_0_40px_rgba(128,0,0,0.6)]">
   

                        <div className="overflow-hidden h-[360px]">
                                                              
                            <Image src="/images/book.jpg" alt="abc" width={582} height={640} className="w-full h-auto duration-3000 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]" />

                        </div>
                    </div>
                </div>
            </ScrollReveal >
        </section>
    )
}

export default ProjectsSection;