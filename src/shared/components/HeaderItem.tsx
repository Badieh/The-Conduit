import { NavLink } from "react-router";

interface HeaderItemProps {
  route: string;
  children: React.ReactNode;
}

export default function HeaderItem({ route, children }: HeaderItemProps) {
  return (
    <li className="text-xs sm:text-xl">
      <NavLink
        className={({ isActive }) =>
          `hover:text-blue-400 ${isActive ? "text-blue-400 no-underline" : "text-gray-400"}`
        }
        to={route}
      >
        {children}
      </NavLink>
    </li>
  );
}
