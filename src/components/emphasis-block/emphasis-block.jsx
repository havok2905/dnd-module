import React from "react";
import PropTypes from "prop-types";
import "./emphasis-block.scss";
import BORDER_TOP from "./border-top.png";
import BORDER_BOTTOM from "./border-bottom.png";

const EmphasisBlock = ({ children, idSlug }) => {
    return (
        <section id={idSlug} className="emphasis-block">
            <img className="emphasis-block__border" src={BORDER_TOP} />
            <div className="emphasis-block__content">{children}</div>
            <img className="emphasis-block__border" src={BORDER_BOTTOM} />
        </section>
    );
};

EmphasisBlock.propTypes = {
    idSlug: PropTypes.string
};

export { EmphasisBlock };
