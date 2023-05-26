/* Import du composant "NavLink" de la bibliothèque "react-router-dom" afin de créer un lien de navigation. */
import { NavLink } from "react-router-dom";

/* Création du composant. */
const Navigation = ({ title }) => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="link">
          {title}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
