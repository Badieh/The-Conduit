import { NavLink } from "react-router";

interface HeaderItemProps {
  route: string;
  children: React.ReactNode;
}

export default function HeaderItem({ route, children }: HeaderItemProps) {
  return (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        to={route}
      >
        {children}
      </NavLink>
    </li>
  );
}
