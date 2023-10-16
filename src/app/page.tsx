import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';
import Experiences from './components/experience/Experiences';
import Projects from './components/projects/Projects';
import ResumeBox from './components/ResumeBox';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div className="bg-neutral-950 mx-auto w-auto min-h-screen md:flex md:justify-between gap-36 md:px-24 xs:px-4">
      <Sidebar />
      <main className="md:w-1/2 flex flex-col min-h-[200vh]">
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
