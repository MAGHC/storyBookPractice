import React from "react";
import "./ButtonSelf.scss";
import PropTypes from "prop-types";

export const ButtonSelf = ({ mode, size, label }) => {
  return (
    <button type="button" className={`button button__${mode} button__${mode}--${size}`}>
      {label}
    </button>
  );
};

ButtonSelf.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  mode: PropTypes.oneOf(["light", "dark"]).isRequired,
  label: PropTypes.string.isRequired,
};

ButtonSelf.defaultProps = {
  size: "medium",
  mode: "light",
  label: "button",
};
