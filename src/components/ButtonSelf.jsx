import React from "react";
import "./ButtonSelf.scss";
import PropTypes from "prop-types";

export const ButtonSelf = ({ mode, color, size, ...props }) => {
  const darkMode = mode === "darkmode" ? "dark" : "light";
  return (
    <button type="button" className={darkMode}>
      클릭
    </button>
  );
};

ButtonSelf.propTypes = {
  size: PropTypes.string,
};

ButtonSelf.defaultProps = {
  size: "medium",
  mode: "light",
};
