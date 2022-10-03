import "./Card.scss";
import PropTypes from "prop-types";

export const Card = ({ frontlabel, backlabel, lifront, liback }) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--front"></div>
        <h4>{frontlabel}</h4>
        <ul>
          <li>{lifront}</li>
          <li>{lifront}</li>
        </ul>
      </div>
      <div className="card__side card__side--back">
        <div className="card__picture card__picture--back"></div>
        <h4>{backlabel}</h4>
        <ul>
          <li>{liback}</li>
          <li>{liback}</li>
        </ul>
      </div>
    </div>
  );
};

Card.prototype = {
  frontlabel: PropTypes.string.isRequired,
  backlabel: PropTypes.string.isRequired,
  liback: PropTypes.string.isRequired,
  lifront: PropTypes.string.isRequired,
};

Card.defaultProps = {
  frontlabel: "앞면",
  backlabel: "뒷면",
  liback: "뒷면내용",
  lifront: "앞면내용",
};
