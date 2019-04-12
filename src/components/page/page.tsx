import React from "react";
import "./page.scss";

const Page = ({ children }) => {
    return <article className="page">{children}</article>;
};

export { Page };
