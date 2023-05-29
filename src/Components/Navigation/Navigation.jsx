/* Import du composant "NavLink" de la bibliothèque "react-router-dom" afin de créer un lien de navigation. */
import { NavLink } from "react-router-dom";

/* Création du composant. */
const Navigation = ({ title, logo }) => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="link">
          {title}
          {logo && <img src={logo} alt="logo myflix" className="logoHeader" />}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
