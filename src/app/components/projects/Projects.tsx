import ProjectBox from './ProjectBox';
import projects from './projects.json';

export default function Projects() {
  return (
    <section id="projects" className="w-full pt-12">
      {projects.map((project) => (
        <ProjectBox project={project} key={project.title} />
      ))}
    </section>
  );
}
