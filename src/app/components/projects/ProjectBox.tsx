import Image from 'next/image';

interface iProject {
  project: {
    title: string;
    date: number;
    description: string;
    image: string;
    imageAlt: string;
    deployment: string;
    github: string;
    tech: string[];
  };
}

export default function ProjectBox({ project }: iProject) {
  return (
    <article className="grid grid-cols-12 mt-12 bg-gray-200 bg-opacity-30 p-6 rounded-xl transition ease-in-out hover:bg-opacity-40 group">
      <div className="col-span-4 flex flex-col justify-between items-start font-bold text-sm hover-text">
        <a href={project.deployment} target="_blank">
          <Image
            src={project.image}
            width={0}
            height={0}
            sizes="100vw"
            alt={project.imageAlt}
            className="w-10/12 rounded border-gray-200 border-opacity-30 group-hover:border-opacity-40 border-2 brightness-75 group-hover:brightness-100 transition"
          />
        </a>
        <p>{project.date}</p>
      </div>
      <div className="col-span-8 flex flex-col">
        <header>
          <div className="flex flex-row justify-between">
            <a
              href={project.deployment}
              className="flex flex-row gap-2 font-bold text-2xl"
            >
              <h3 className="hover:underline transition hover-text">
                {project.title}
              </h3>
              <p className="group-hover:translate-x-2 transition hover-text">
                {'->'}
              </p>
            </a>
            <a href={project.github} target="_blank">
              <Image
                src="/svg/github.svg"
                width={28}
                height={28}
                alt="GitHub Logo"
                className="opacity-50 hover:scale-110 group-hover:opacity-100 transition"
              />
            </a>
          </div>
          <hr className="my-2" />
        </header>
        <p className="my-2 list-disc list-inside text-base leading-relaxed hover-text">
          {project.description}
        </p>
        <ul className="flex flex-row flex-wrap pt-2 gap-3">
          {project.tech.map((tech) => (
            <li className="tech-btn" key={tech.length}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
