import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';
import Experiences from './components/experience/Experiences';

export default function Home() {
  return (
    <div className="bg-neutral-950 mx-auto w-auto min-h-screen flex justify-between gap-36 px-24">
      <Sidebar />
      <main className="w-1/2 flex flex-col py-10 min-h-[200vh]">
        <About />
        <Experiences />

      </main>
    </div>
  );
}

// #161616
