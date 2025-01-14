import { paths } from "@/routes/AppRouter";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Link to={paths.home.getHref()} className="logo-font">
          conduit
        </Link>
        <span className="attribution">
          An interactive learning project from{" "}
          <a href="https://thinkster.io" target="_blank" rel="noopener">
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
        <span className="attribution">
          Implementation by{" "}
          <a
            href="https://www.linkedin.com/in/badiehnader/"
            target="_blank"
            rel="noopener"
          >
            Badieh nader
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
