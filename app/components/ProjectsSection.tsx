"use client";
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import {projectsList} from "../util/data";
import ProjectItem from './ProjectItem';
import { useState } from 'react';
const ProjectsSection = () =>{
    const [projectsNumber, setProjectsNumber] = useState(3);

    return (
        <section id="projects" className="relative py-28 space-y-24 ">
            {/* <div className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl" 
           
             /> */}
                                <h2 className="text-3xl sm:text-3xl font-semibold  md:text-3xl font-normal tracking-right">
                Projects</h2>
               <> {projectsList.map((listItem,position)=>{
                if(position<projectsNumber){
                return <ProjectItem key={listItem.name} name={listItem.name} position={position} description={listItem.description} image={listItem.image} scrollable={listItem.scrollable}/>
                }
                else 
                {
                    return ;
                }
            })}
               {projectsNumber-projectsList.length <0 && <div onClick={()=>setProjectsNumber(projectsNumber+3)} className="text-center self-center hover:cursor-pointer hover:text-[#880000]">See More</div>}
</>
        </section>
    )
}

export default ProjectsSection;