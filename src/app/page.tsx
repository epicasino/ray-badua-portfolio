import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';
import Experiences from './components/experience/Experiences';
import Projects from './components/projects/Projects';
import ResumeBox from './components/ResumeBox';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div className="bg-neutral-950 mx-auto w-auto min-h-screen flex justify-between gap-36 px-24">
      <Sidebar />
      <main className="w-1/2 flex flex-col min-h-[200vh]">
        <About />
        <Experiences />
        <ResumeBox />
        <Projects />
        {/* Do full Project Page... Soon... */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

// #161616
