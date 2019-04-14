import * as React from "react";
import { IButton } from "./interfaces/i-button";

const ImportantButton = ({ onClick, qaTarget, text, typeStr }: IButton) => {
    return (
        <button
            className="important-button"
            data-qa-target={qaTarget}
            onClick={onClick}
            type={typeStr}
        >
            {text}
        </button>
    );
};

ImportantButton.defaultProps = {
    qaTarget: "",
    onClick: () => {}
};

export { ImportantButton };
