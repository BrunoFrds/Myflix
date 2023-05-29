/* Import du hook "useState" de la bibliothèque React pour gérer les états. */
import { useState } from "react";
/* Import des différentes images utilisées. */
import profilImg from "../../Assets/Images/profilavatar.png";
import profilJeunesse from "../../Assets/Images/logoJeunesse.png";
/* Import du composant "FontAwesomeIcon" de la bibliothèque "@fortawesome/react-fortawesome" pour afficher les icônes voulues à l'aide de la bibliothèque "@fortawesome/free-solid-svg-icons" et "@fortawesome/free-regular-svg-icons". */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faShuffle,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

/* Création des différentes constantes qui vont contenir nos icônes qui seront utilisées pour afficher les icônes dans notre composant. */
const arrowDown = <FontAwesomeIcon icon={faCaretDown} />;
const profil = <FontAwesomeIcon icon={faGear} />;
const transfert = <FontAwesomeIcon icon={faShuffle} />;
const user = <FontAwesomeIcon icon={faUser} />;
const help = <FontAwesomeIcon icon={faCircleQuestion} />;

/* Création du composant. */
const Profil = () => {
  /* Utilisation du hook "useState" pour gérer les états "isProfilHovered" et "isWindowHovered" qui représentent si la souris survole l'icône de profil et la fenêtre de profil. 
  "setprofilHovered" et "setWindowHovered" permettent de mettre à jour ces états. */
  const [isProfilHovered, setProfilHovered] = useState(false);
  const [isWindowHovered, setWindowHovered] = useState(false);

  /* Définition de quatre fonctions de gestions des évènements de survol de la souris. */
  /* Ce qui met à jour l'état "isProfilHovered" à "true", affichant la fenêtre de profil. */
  const handleMouseEnter = () => {
    setProfilHovered(true);
  };

  /* Ce qui met à jour l'état "isProfilHovered" à "false", fermant la fenêtre de profil. */
  const handleMouseLeave = () => {
    setProfilHovered(false);
  };

  /* Ce qui met à jour l'état "isWindowHovered" à "true", gardant la fenêtre de profil ouverte. */
  const handleWindowMouseEnter = () => {
    setWindowHovered(true);
  };

  /* Ce qui met à jour l'état "isWindowHovered" à "false", fermant la fenêtre de profil. */
  const handleWindowMouseLeave = () => {
    setWindowHovered(false);
  };

  return (
    <div
      className="profil"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="profilImgArrow">
        <img src={profilImg} alt="avatar" className="profilImg" />
        <div className="arrowContainer">
          <span className="arrowDown">{arrowDown}</span>
        </div>
      </div>
      {(isProfilHovered || isWindowHovered) && (
        <div
          className="profilWindow"
          onMouseEnter={handleWindowMouseEnter}
          onMouseLeave={handleWindowMouseLeave}
        >
          <div className="profilLink">
            <a href="#">
              <img
                src={profilJeunesse}
                alt="Image Logo Jeunesse"
                className="logoJeunesse"
              />
              <span className="optionJeunesse">Jeunesse</span>
            </a>
          </div>
          <span className="line1"></span>
          <div className="profilLink">
            <a href="#">
              <span className="iconProfil">{profil}</span>
              <span className="optionLink">Gérer les profils</span>
            </a>
          </div>
          <div className="profilLink">
            <a href="#">
              <span className="iconProfil">{transfert}</span>
              <span className="optionLink">Transférer un profil</span>
            </a>
          </div>
          <div className="profilLink">
            <a href="#">
              <span className="iconProfil">{user}</span>
              <span className="optionLink">Compte</span>
            </a>
          </div>
          <div className="profilLink">
            <a href="#">
              <span className="iconProfil">{help}</span>
              <span className="optionLink">Centre d'aide</span>
            </a>
          </div>
          <span className="line2"></span>
          <div className="profilLink">
            <a href="#" className="disconnect">
              <span className="optionLink">Se déconnecter</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
