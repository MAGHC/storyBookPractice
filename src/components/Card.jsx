import "./Card.scss";
import PropTypes from "prop-types";

export const Card = ({ frontlabel, backlabel }) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">{frontlabel}</div>
      <div className="card__side card__side--back">{backlabel}</div>
    </div>
  );
};

Card.prototype = {
  frontlabel: PropTypes.string.isRequired,
  backlabel: PropTypes.string.isRequired,
};

Card.defaultProps = {
  frontlabel: "앞면",
  backlabel: "뒷면",
};
