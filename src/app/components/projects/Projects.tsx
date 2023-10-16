import ProjectBox from './ProjectBox';
import projects from './projects.json';

export default function Projects() {
  return (
    <section id="projects" className="w-full mt-2">
      <p className="md:hidden mt-10 -mb-5 text-xl font-semibold text-slate-50">
        Experience
        <hr />
      </p>
      {projects.map((project) => (
        <ProjectBox project={project} key={project.title} />
      ))}
    </section>
  );
}
