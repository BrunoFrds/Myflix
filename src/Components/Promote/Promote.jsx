import Button from "../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
const playButton = <FontAwesomeIcon icon={faPlay} />;
const infoButton = <FontAwesomeIcon icon={faCircleInfo} />;

const Promote = ({ id, cover, alt, title, text, description }) => {
  return (
    <div
      id={id}
      className="promote"
      style={{ background: `url(${cover}) center/cover no-repeat` }}
      alt={alt}
    >
      <div className="promoteContener">
        <div className="promoteTextContener">
          <h1 className="promoteTitle">{title}</h1>
          <p className="promoteText">{text}</p>
          <p className="promoteDescription">{description}</p>
        </div>
        <div className="promoteButtons">
          <Button
            key={"play"}
            name={"playButton"}
            title={"Lecture"}
            icon={playButton}
          />
          <Button
            key={"info"}
            name={"infoButton"}
            title={"Plus d'infos"}
            icon={infoButton}
          />
        </div>
      </div>
      <div className="gradientBorderTop"></div>
      <div className="gradientBorderLeft"></div>
      <div className="gradientBorderBottom"></div>
    </div>
  );
};

export default Promote;
