import { paths } from "@/routes/AppRouter";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap items-center gap-2 bg-gray-200 px-4 py-3 text-sm sm:justify-center sm:text-lg">
        <Link to={paths.home.getHref()} className="font-bold text-blue-400">
          conduit
        </Link>
        <span className="text-gray-500">
          An interactive learning project from{" "}
          <a href="https://thinkster.io" target="_blank" rel="noopener">
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
        <span className="text-gray-500 sm:mr-10">
          Implementation by{" "}
          <a
            href="https://www.linkedin.com/in/badiehnader/"
            target="_blank"
            rel="noopener"
            className="font-bold text-blue-400"
          >
            Badieh nader
          </a>
          .
        </span>

        <span className="flex items-center gap-2 text-gray-500">
          <FaGithub />

          <a
            href="https://github.com/Badieh/The-Conduit"
            target="_blank"
            rel="noopener"
          >
            Source code
          </a>
        </span>
      </div>
    </footer>
  );
}
