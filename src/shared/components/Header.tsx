import { NavLink } from "react-router";

import HeaderItem from "./HeaderItem";
import { useUserStore } from "@/stores/UserStore";
import { paths } from "@/routes/AppRouter";

export default function Header() {
  const user = useUserStore((state) => state.user);

  console.log("current user:", user);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to={paths.home.getHref()}>
          conduit
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <HeaderItem route={paths.home.getHref()}>Home</HeaderItem>
          {user ? (
            <>
              <HeaderItem route={paths.editArticle.getHref()}>
                <i className="ion-compose"></i>&nbsp;New Article
              </HeaderItem>

              <HeaderItem route={paths.setting.getHref()}>
                <i className="ion-gear-a"></i>&nbsp;Settings
              </HeaderItem>

              <HeaderItem route={paths.profile.getHref(user.username)}>
                <img title="profile" src="" className="user-pic" />
                {user.username}
              </HeaderItem>
            </>
          ) : (
            <>
              <HeaderItem route={paths.login.getHref()}>Sign in</HeaderItem>

              <HeaderItem route={paths.register.getHref()}>Sign up</HeaderItem>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
