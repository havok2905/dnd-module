import React from "react";
import PropTypes from "prop-types";
import "./important-button.scss";

const ImportantButton = ({ onClick, qaTarget, text, type }) => {
    return (
        <button
            className="important-button"
            data-qa-target={qaTarget}
            onClick={onClick}
            type={type}
        >
            {text}
        </button>
    );
};

ImportantButton.propTypes = {
    onClick: PropTypes.func,
    qaTarget: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

ImportantButton.defaultProps = {
    qaTarget: "",
    onClick: () => {}
};

export { ImportantButton };
