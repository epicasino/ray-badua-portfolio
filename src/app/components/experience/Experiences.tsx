export default function Experiences() {
  return (
    <section id="experiences" className="w-full">
      <article className="grid grid-cols-12 bg-gray-200 bg-opacity-30 p-6 rounded-xl mt-24 transition ease-in-out hover:bg-opacity-40 group">
        <div className="col-span-2 flex justify-start items-start font-bold text-sm hover-text">
          2023
        </div>
        <div className="col-span-8">
          <h3 className="font-bold text-2xl hover-text">
            Project Manager · UC San Diego
          </h3>
          <hr className="my-2" />
          <ul className="m-2 list-disc list-inside text-sm leading-relaxed hover-text">
            <li>
              Lead and oversaw various project workflows and managed Kanban
              boards within an agile work environment to maintain a steady
              work-pace.
            </li>
            <li>
              Assisted project members in reviewing and providing feedback on
              their code during daily scrums.
            </li>
            <li>
              Managed merge conflicts and merge pull requests from project
              collaborators within GitHub Project Repositories in order to
              maintain a stable, clean, and functioning application.
            </li>
          </ul>
          <ul className="flex flex-row flex-wrap pt-2 gap-3">
            <li className="tech-btn">MongoDB</li>
            <li className="tech-btn">Express</li>
            <li className="tech-btn">ReactJS</li>
            <li className="tech-btn">NodeJS</li>
            <li className="tech-btn">HTML</li>
            <li className="tech-btn">CSS</li>
            <li className="tech-btn">JavaScript</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
