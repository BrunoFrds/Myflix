import { useState } from "react";
import notif1 from "../../Assets/Images/notif1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const notif = <FontAwesomeIcon icon={faBell} />;

const Search = () => {
  const [isNotifHovered, setNotifHovered] = useState(false);
  const [isWindowHovered, setWindowHovered] = useState(false);

  const handleMouseEnter = () => {
    setNotifHovered(true);
  };

  const handleMouseLeave = () => {
    setNotifHovered(false);
  };

  const handleWindowMouseEnter = () => {
    setWindowHovered(true);
  };

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
            <img src={notif1} alt="Image Notif" className="imageNotif" />
            <p className="pNotif">
              Avant-première Myflix <br />
              Découvrez les titres bientôt disponibles. <br />
              <span className="dateNotif">Aujourd'hui</span>
            </p>
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
