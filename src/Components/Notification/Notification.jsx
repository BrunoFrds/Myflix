/* Import du hook "useState" de la bibliothèque React pour gérer les états. */
import { useState } from "react";
/* Import des différentes images utilisées. */
import imgNotif1 from "../../Assets/Images/ImgNotif1.png";
import imgNotif2 from "../../Assets/Images/ImgNotif2.png";
/* Import du composant "FontAwesomeIcon" de la bibliothèque "@fortawesome/react-fortawesome" pour afficher l'icône voulue à l'aide de la bibliothèque "@fortawesome/free-regular-svg-icons". */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

/* Création de la constante "notif" qui contient notre icône qui sera utilisée pour afficher l'icône dans notre composant. */
const notif = <FontAwesomeIcon icon={faBell} />;

/* Création du composant. */
const Search = () => {
  /* Utilisation du hook "useState" pour gérer les états "isNotifHovered" et "isWindowHovered" qui représentent si la souris survole l'icône de notification et la fenêtre de notifications. 
  "setNotifHovered" et "setWindowHovered" permettent de mettre à jour ces états. */
  const [isNotifHovered, setNotifHovered] = useState(false);
  const [isWindowHovered, setWindowHovered] = useState(false);

  /* Définition de quatre fonctions de gestions des évènements de survol de la souris. */
  /* Ce qui met à jour l'état "isNotifHovered" à "true", affichant la fenêtre de notifications. */
  const handleMouseEnter = () => {
    setNotifHovered(true);
  };

  /* Ce qui met à jour l'état "isNotifHovered" à "false", fermant la fenêtre de notifications. */
  const handleMouseLeave = () => {
    setNotifHovered(false);
  };

  /* Ce qui met à jour l'état "isWindowHovered" à "true", gardant la fenêtre de notifications ouverte. */
  const handleWindowMouseEnter = () => {
    setWindowHovered(true);
  };

  /* Ce qui met à jour l'état "isWindowHovered" à "false", fermant la fenêtre de notifications. */
  const handleWindowMouseLeave = () => {
    setWindowHovered(false);
  };

  return (
    <div className="notif">
      <span
        className="notifIcon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {notif}
      </span>
      {(isNotifHovered || isWindowHovered) && (
        <div
          className="linksWindow"
          onMouseEnter={handleWindowMouseEnter}
          onMouseLeave={handleWindowMouseLeave}
        >
          <a href="#" className="lienNotif">
            <img src={imgNotif1} alt="ImageNotif" className="imageNotif" />
            <p className="pNotif">
              Avant-première Myflix <br />
              Découvrez les titres bientôt disponibles. <br />
              <span className="dateNotif">Aujourd'hui</span>
            </p>
          </a>
          <a href="#" className="lienNotif">
            <img src={imgNotif2} alt="ImageNotif" className="imageNotif" />
            <p className="pNotif">
              Reprenez la lecture <br />
              Au nom de Dieu : Les bourreaux de la foi <br />
              <span className="dateNotif">il y a 2 semaines</span>
            </p>
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
