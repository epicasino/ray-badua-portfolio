import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-5 text-slate-50 mt-14">
      <header className="flex flex-col gap-2">
        <h3 className="md:text-2xl text-xl">Questions? Comments? Contact Me!</h3>
        <hr />
      </header>
      <a
        className="inline-flex items-center gap-4 group w-fit"
        href="https://github.com/epicasino"
        target="_blank"
      >
        <Image
          src="/svg/github.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="GitHub Logo"
          className="w-10 group-hover:scale-110 transition"
        />
        <span className="text-xl">gh/epicasino</span>
        <span className="text-xl group-hover:translate-x-2 transition">
          {'->'}
        </span>
      </a>
      <a
        className="inline-flex items-center gap-4 group w-fit"
        href="https://www.linkedin.com/in/ray-badua/"
        target="_blank"
      >
        <Image
          src="/svg/linkedin.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="LinkedIn Logo"
          className="w-10 group-hover:scale-110 transition"
        />
        <span className="text-xl">in/ray-badua</span>
        <span className="text-xl group-hover:translate-x-2 transition">
          {'->'}
        </span>
      </a>
      <a
        className="inline-flex items-center gap-4 group w-fit"
        href="mailto:rjbadua@pm.me"
        target="_blank"
      >
        <Image
          src="/svg/email.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Email Address Logo"
          className="w-10 group-hover:scale-110 transition"
        />
        <span className="text-xl">rjbadua@pm.me</span>
        <span className="text-xl group-hover:translate-x-2 transition">
          {'->'}
        </span>
      </a>
    </section>
  );
}
