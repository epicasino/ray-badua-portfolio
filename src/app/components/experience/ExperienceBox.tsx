interface iExperience {
  experience: {
    date: string;
    title: string;
    notes: string[];
    tech: string[];
  };
}

export default function ExperienceBox({ experience }: iExperience) {
  return (
    <article className="md:grid md:grid-cols-12 bg-gray-200 bg-opacity-30 p-6 rounded-xl transition ease-in-out hover:bg-opacity-40 group">
      <div className="col-span-2 flex md:justify-start items-start font-bold text-sm hover-text">
        {experience.date}
      </div>
      <div className="col-span-8">
        <h3 className="font-bold md:text-2xl text-xl hover-text">{experience.title}</h3>
        <hr className="my-2" />
        <ul className="m-2 list-disc list-inside text-sm leading-relaxed hover-text">
          {experience.notes.map((note) => (
            <li key={note.length}>{note}</li>
          ))}
        </ul>
        <ul className="flex flex-row flex-wrap pt-2 gap-3">
          {experience.tech.map((tech) => (
            <li className="tech-btn" key={tech.length}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
