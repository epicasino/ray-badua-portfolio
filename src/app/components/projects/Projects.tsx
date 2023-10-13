import ProjectBox from './ProjectBox';
import projects from './projects.json';

export default function Projects() {
  return (
    <section id="projects" className="w-full mt-2">
      {projects.map((project) => (
        <ProjectBox project={project} key={project.title} />
      ))}
    </section>
  );
}
