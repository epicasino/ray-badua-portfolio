export default function ResumeBox() {
  return (
    <a
      href="docs/Ray_Badua_Resume.pdf"
      className="mt-14 h-20 text-gray-300 text-2xl group block"
    >
      <div className="bg-gray-200 bg-opacity-30 rounded-xl h-full flex items-center w-2/12 group-hover:w-full transition-all"></div>
      <h2 className="-translate-y-14 ps-4 group-hover:translate-x-10 group-hover:scale-110 hover-text transition-all">View Résumé {'->'}</h2>
    </a>
  );
}
