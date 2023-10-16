import ExperienceBox from './ExperienceBox';
import experiences from './experiences.json';

export default function Experiences() {
  return (
    <section id="experiences" className="w-full pt-24">
      <p className="md:hidden text-xl mb-5 font-semibold text-slate-50">
        Experience
        <hr />
      </p>
      {experiences.map((experience) => (
        <ExperienceBox experience={experience} key={experience.title} />
      ))}
    </section>
  );
}
