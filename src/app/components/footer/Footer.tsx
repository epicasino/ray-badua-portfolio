export default function Footer() {
  return (
    <footer className="mt-24 mb-10 font-thin text-slate-200 flex flex-col gap-4">
      <hr className="w-3/4" />
      <p className="w-1/2">
        Designed in{' '}
        <a
          href="https://www.figma.com/file/rJs9nnEjyI2dnII3wU0SAI/Portfolio-v2?type=design&node-id=1%3A2&mode=design&t=PYzJrsgr7W1ObYfC-1"
          target="_blank"
          className="hover:font-normal hover:text-slate-50 transition-all"
        >
          Figma
        </a>
        , Built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="hover:font-normal hover:text-slate-50 transition-all"
        >
          NextJS
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="hover:font-normal hover:text-slate-50 transition-all"
        >
          Tailwind CSS
        </a>{' '}
        , Deployed with{' '}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          className="hover:font-normal hover:text-slate-50 transition-all"
        >
          Netlify
        </a>{' '}
        .
      </p>
    </footer>
  );
}
