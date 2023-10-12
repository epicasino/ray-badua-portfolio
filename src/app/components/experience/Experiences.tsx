export default function Experiences() {
  return (
    <section id="experiences" className="w-full">
      <article className="grid grid-cols-12 bg-gray-200 bg-opacity-30 p-6 rounded-xl mt-24 transition ease-in-out hover:bg-opacity-40 group">
        <div className="col-span-2 flex justify-start items-start text-slate-200 font-bold text-sm group-hover:text-slate-50 transition">
          2023
        </div>
        <div className="col-span-8">
          <h3 className="font-bold text-2xl text-slate-200 group-hover:text-slate-50 transition">
            Project Manager · UC San Diego
          </h3>
          <hr className="my-2" />
          <ul className="m-2 list-disc list-inside text-slate-200 text-sm leading-relaxed group-hover:text-slate-50 transition">
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
        </div>
      </article>
    </section>
  );
}
