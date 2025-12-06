import Image from "next/image";
import IntroSection from "./components/IntroSection";
import TechStack from "./components/TechStack";
import ProjectsSection from './components/ProjectsSection';
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
export default function Home() {
  return (
    <>
    <main className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"> */}
      {/* <ParallaxPage/> */}
      <div id="home" className=" "><IntroSection/></div>
      <div id="about" className=" pt-24 pb-32"><AboutSection/></div>
      <div id="tech" className=" py-24"><TechStack/></div>
      <div id="projects" className=" py-24"><ProjectsSection/></div>
      <div id="contactme" className=""><ContactSection/></div>
    </main>
    </>
  );
}
