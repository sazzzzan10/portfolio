
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import {projectsList} from "../util/data";
import ProjectItem from './ProjectItem';
const ProjectsSection = () =>{
    return (
        <section id="projects" className="relative py-28 space-y-24 ">
            {/* <div className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl" 
           
             /> */}
                                <h2 className="text-3xl sm:text-3xl font-semibold  md:text-3xl font-normal tracking-right">
                Projects</h2>
               <> {projectsList.map((listItem,position)=>{
                return <ProjectItem key={listItem.name} name={listItem.name} position={position} description={listItem.description} image={listItem.image} scrollable={listItem.scrollable}/>
               })}
</>
        </section>
    )
}

export default ProjectsSection;