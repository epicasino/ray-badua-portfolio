import Sidebar from './components/sidebar/Sidebar';

export default function Home() {
  return (
    <main className="bg-neutral-950 mx-auto w-auto min-h-screen flex justify-between gap-6 px-24">
      <Sidebar />
      <div className="w-1/2 bg-white"></div>
    </main>
  );
}

// #161616
