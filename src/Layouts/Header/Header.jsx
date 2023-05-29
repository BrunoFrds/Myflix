/* Import de l'image utilisée. */
import logoheader from "../../Assets/Images/myflixlogo.png";
/* Import des différents composants utilisés*/
import Navigation from "../../Components/Navigation/Navigation";
import Search from "../../Components/Search/Search";
import Notification from "../../Components/Notification/Notification";
import Profil from "../../Components/Profil/Profil";

/* Création du composant. */
const Header = () => {
  return (
    <header>
      <div className="headerBar">
        <div className="logoLinks">
          <Navigation logo={logoheader} />
          <Navigation title="Accueil" />
          <Navigation title="Series" />
          <Navigation title="Films" />
          <Navigation title="Nouveautés" />
          <Navigation title="Ma liste" />
        </div>
        <div className="buttonsHeader">
          <Search />
          <Notification />
          <Profil />
        </div>
      </div>
    </header>
  );
};

export default Header;
