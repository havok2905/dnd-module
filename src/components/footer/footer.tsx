import React from "react";
import { RollForm } from "../roll-form/roll-form";
import { ToTopButton } from "../button/to-top-button";

const Footer = () => {
    return (
        <footer className="footer">
            <ToTopButton />
            <RollForm />
        </footer>
    );
};

export { Footer };
