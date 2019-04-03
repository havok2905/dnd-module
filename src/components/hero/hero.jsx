import React from "react";
import PropTypes from "prop-types";
import "./hero.scss";

const Hero = ({ alt, src }) => {
    return <img className="hero" src={src} alt={alt} />;
};

Hero.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export { Hero };
