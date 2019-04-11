import * as React from "react";
import { IButton } from "./ibutton";
import "./button.scss";

const Button = ({ onClick, qaTarget, text, typeStr }: IButton) => {
    return (
        <button
            className="button"
            data-qa-target={qaTarget}
            onClick={onClick}
            type={typeStr}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    qaTarget: "",
    onClick: () => {}
};

export { Button };
