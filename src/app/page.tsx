import Sidebar from './components/sidebar/Sidebar';

export default function Home() {
  return (
    <div className="bg-neutral-950 mx-auto w-auto min-h-screen flex justify-between gap-6 px-24">
      <Sidebar />
      <main className="w-1/2 flex flex-col py-10 min-h-[200vh]">
        <section id="about" className="text-neutral-50">
          <p>
            Hello! I&apos;m a full-stack engineer with expertise in MongoDB,
            Express, React, and NodeJS. I&apos;ve been a programmer for 2 years,
            with notable proficiency in building scalable web applications using
            modern web technologies and practices.
          </p>
          <br />
          <p>
            Outside of coding, You&apos;ll catch me rock climbing, spending time
            with my two dogs, or singing songs with my guitar or piano!
          </p>
        </section>
      </main>
    </div>
  );
}

// #161616
