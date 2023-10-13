export default function About() {
  return (
    <section id="about" className="text-neutral-50 leading-loose pt-10 text-lg">
      <p>
        Hello! I&apos;m a full-stack engineer with expertise in{' '}
        <strong>MongoDB</strong>, <strong>Express</strong>,{' '}
        <strong>React</strong>, and <strong>NodeJS</strong>. I&apos;ve been a
        programmer for 2 years, with notable proficiency in building scalable
        web applications using modern web technologies and practices.
      </p>
      <br />
      <p>
        Outside of coding, You&apos;ll catch me rock climbing, spending time
        with my two dogs, or{' '}
        <a
          className="cursor-[url(/svg/twitch.svg),_pointer] hover:underline hover:font-semibold"
          href="https://twitch.tv/epicasino"
          target="_blank"
        >
          singing songs with my guitar or piano
        </a>
        !
      </p>
    </section>
  );
}
