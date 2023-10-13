import ExperienceBox from './ExperienceBox';
import experiences from './experiences.json';

export default function Experiences() {
  return (
    <section id="experiences" className="w-full pt-24">
      {experiences.map((experience) => (
        <ExperienceBox experience={experience} key={experience.title} />
      ))}
    </section>
  );
}
