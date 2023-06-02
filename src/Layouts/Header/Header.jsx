/* Import des hooks "useEffect et useState" de la bibliothèque React pour gérer le cycle de vie et les états du header. */
import { useState, useEffect } from "react";
/* Import de l'image utilisée. */
import logoheader from "../../Assets/Images/myflixlogo.png";
/* Import des différents composants utilisés*/
import Navigation from "../../Components/Navigation/Navigation";
import Search from "../../Components/Search/Search";
import Notification from "../../Components/Notification/Notification";
import Profil from "../../Components/Profil/Profil";

/* Création du composant. */
const Header = () => {
  /* Utilisation du hook "useState" pour gérer l'état "isScrolled" qui représente si la fenêtre est scrollée ou pas. */
  const [isScrolled, setIsScrolled] = useState(false);

  /* Utilisation du hook "useEffect" pour définir un effet qui sera éxécuté à chaque fois que la valeur de "isScrolled" changera. */
  useEffect(() => {
    /* On définit une fonction "handleScroll" qui va mettre à jour la valeur de "isScrolled" en fonction du positionnement de défilement de la fenêtre. */
    const handleScroll = () => {
      /* Si la page est défilée, alors la valeur de "isScrolled" passe à "true". */
      if (window.scrollY > 0) {
        setIsScrolled(true);
        /* Sinon la valeur de "isScrolled" passe à "false". */
      } else {
        setIsScrolled(false);
      }
    };

    /* Ajout d'un écouteur d'évènement "scroll" à la fenêtre pour écouter les défilements et éxècuter la fonction "handleScroll" à chaque fois que le défilement est déclenché. */
    window.addEventListener("scroll", handleScroll);

    return () => {
      /* Suppression de l'écouteur d'évènements lors du démontage du composant. */
      window.removeEventListener("scroll", handleScroll);
    };
    /* Tableau de dépendances vide pour indiquer que l'effet doit être éxécuté qu'une seule fois. */
  }, []);

  return (
    <header className={isScrolled ? "opacity" : ""}>
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
