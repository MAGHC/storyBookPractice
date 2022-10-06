import PropTypes from "prop-types";

export const ImageView = ({ image1, image2, image3 }) => {
  return (
    <div className="container">
      <div className="image1">
        <img alt="img" src={image1}></img>
      </div>
      <div className="image2">
        <img alt="img" src={image2}></img>
      </div>
      <div className="image3">
        <img alt="img" src={image3}></img>
      </div>
    </div>
  );
};

ImageView.prototype = {
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  image3: PropTypes.string.isRequired,
};

ImageView.defaultProps = {
  image1: "",
  image2: "",
  image3: "",
};
