import React from "react";
import { RollForm } from "../roll-form/roll-form";
import { ToTopButton } from "../button/to-top-button";
import { DmScreenButton } from "../button/dm-screen-button";

const Footer = () => {
    return (
        <footer className="footer">
            <ToTopButton />
            <DmScreenButton />
            <RollForm />
        </footer>
    );
};

export { Footer };
