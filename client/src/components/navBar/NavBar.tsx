import "./navBar.scss";
import { NavLink } from "react-router-dom";

type Navigation = {
    link :string,
    className:string,
    name:string,
}

type navProps = {
    navbar:Navigation[];
}

const NavBar: React.FC<navProps> = ({navbar}) => {
  return (
    <div className="mainNavBar">
    {navbar.map((nav, index) => (
      <NavLink to={nav.link} className={nav.className} key={index}>
        {nav.name}
      </NavLink>
    ))}
</div>

  )
}

export default NavBar