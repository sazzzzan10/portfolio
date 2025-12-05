import Image from "next/image";
import ParallaxPage from "./parallax";
import IntroSection from "./components/IntroSection";
import TechStack from "./components/TechStack";
import ProjectsSection from './components/ProjectsSection';
import ContactSection from "./components/ContactSection";
export default function Home() {
  return (
    <>
    <main className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"> */}
      {/* <ParallaxPage/> */}
      <div id="home" className="min-h-screen py-24"><IntroSection/></div>
      <div id="about" className="min-h-screen py-24">About</div>
      <div id="tech" className="min-h-screen py-24"><TechStack/></div>
      <div id="projects" className="min-h-screen py-24"><ProjectsSection/></div>
      <div id="contact" className="min-h-screen py-24"><ContactSection/></div>
    </main>
    </>
  );
}
