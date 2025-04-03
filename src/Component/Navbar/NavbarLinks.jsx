import { NavLink } from "react-router-dom";

const NavbarLinks = ({ link }) => {
  const { id, url, text } = link;
  return (
    <li className="pb-1 md:hover:text-[#42b4ff]  active:text-[#42b4ff]">
      <NavLink className="tracking-wider" to={url}>
        {text}
      </NavLink>
    </li>
  );
};

export default NavbarLinks;
