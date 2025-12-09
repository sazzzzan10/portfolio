"use client";
import ScrollReveal from "./ScrollReveal"
import Image from 'next/image';
 
interface ProjectItemProps {
    name: string,
    description: string,
    position:number,
    image:string
}

const ProjectItem = ({name, description, position, image}:ProjectItemProps)=>{
    return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">
                <div className={position%2==0?"flex flex-col md:order-1":"flex flex-col"}>
                <h1 className={position%2!==0?"text-2xl sm:text-2xl font-normal tracking-light leading-[1.15]":"text-2xl sm:text-2xl md:text-right font-normal tracking-light leading-[1.15]"}>
                {name}
                </h1>
                <div className={position%2!==0?"relative z-100  w-[100%] op-0 md:w-[135%] z-100 bg-gray-800/60 p-4 mt-2 rounded-lg":"relative z-100  top-0 md:-left-[35%] md:w-[135%] z-100 bg-gray-800/60 p-4 mt-2 rounded-lg"}>
{description}               </div>
                </div>
                <ScrollReveal stagger={0.2} className='relative p-0'>
                                            <div className='translate-y-10 pointer-events-none absolute -inset-12 md:-inset-18 rounded-4xl bg-linear-to-b from-[#800000] vai-[#6d28d9]/30 to-transparent blur-[80px] opacity-50 -z-10'></div>
                    <div className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c]  shadow-[0_0_90px_rgba(128, 0, 0, 0.28)] transition-transform duration-300 
                    hover:shadow-[0_0_40px_rgba(128,0,0,0.6)]
                    focus:hover:shadow-[0_0_40px_rgba(128,0,0,0.6)]">
   

                        <div className="overflow-hidden h-[320px]" >
                                                              
                            <Image src={image} alt="abc"  width={582} height={320} className="w-full h-auto duration-3000 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%] "        style={{objectFit:"contain"}}/>

                        </div>
                    </div>
                </ScrollReveal>
            </div>
    )
}

export default ProjectItem;