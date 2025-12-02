import Image from "next/image";
import ParallaxPage from "./parallax";

export default function Home() {
  return (
    <>
    <main className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"> */}
      {/* <ParallaxPage/> */}
      <div id="home" className="min-h-screen py-24">Hero</div>
      <div id="about" className="min-h-screen py-24">About</div>
      <div id="projects" className="min-h-screen py-24">Projects</div>
      <div id="experience" className="min-h-screen py-24">Experience</div>
      <div id="contact" className="min-h-screen py-24">Contact</div>
    </main>
    </>
  );
}
