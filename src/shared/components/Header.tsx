import { NavLink } from "react-router";
import { routes } from "../../routes/AppRouter";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to={routes.Home}>
          conduit
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <HeaderItem route={routes.Home}>Home</HeaderItem>

          <HeaderItem route={routes.Login}>Sign in</HeaderItem>

          <HeaderItem route={routes.Register}>Sign up</HeaderItem>

          <HeaderItem route={routes.EditArticle}>
            <i className="ion-compose"></i>&nbsp;New Article
          </HeaderItem>

          <HeaderItem route={routes.Setting}>
            <i className="ion-gear-a"></i>&nbsp;Settings
          </HeaderItem>

          <HeaderItem route={`${routes.Profile}/eric-simons`}>
            <img title="profile" src="" className="user-pic" />
            Eric Simons
          </HeaderItem>
        </ul>
      </div>
    </nav>
  );
}
