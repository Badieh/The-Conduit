import { NavLink } from "react-router";

import HeaderItem from "./HeaderItem";
import { useUserStore } from "@/stores/UserStore";
import { paths } from "@/routes/AppRouter";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";

export default function Header() {
  const user = useUserStore((state) => state.user);

  return (
    <header>
      <nav className="flex h-14 items-center justify-between px-5 sm:h-16 sm:px-16">
        <NavLink
          className="text-2xl font-bold text-blue-400 sm:text-3xl"
          to={paths.home.getHref()}
        >
          conduit
        </NavLink>
        <ul className="flex gap-x-3">
          <HeaderItem route={paths.home.getHref()}>
            <i className="ion-home"></i>&nbsp;Home
          </HeaderItem>
          {user ? (
            <>
              <HeaderItem route={paths.editArticle.getHref()}>
                <i className="ion-compose"></i>&nbsp;New Article
              </HeaderItem>

              <HeaderItem route={paths.setting.getHref()}>
                <i className="ion-gear-a"></i>&nbsp;Settings
              </HeaderItem>

              <HeaderItem route={paths.profile.getHref(user.username!)}>
                <i className="ion-person"></i>&nbsp;
                {user.username}
              </HeaderItem>
            </>
          ) : (
            <>
              <HeaderItem route={paths.login.getHref()}>
                <RiLoginCircleFill className="inline-block" />
                &nbsp;Sign in
              </HeaderItem>

              <HeaderItem route={paths.register.getHref()}>
                <FaWpforms className="inline-block" />
                &nbsp;Sign up
              </HeaderItem>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
