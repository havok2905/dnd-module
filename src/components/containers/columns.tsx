import * as React from "react";
import { IColumnsProps } from "./interfaces/i-columns-props";

import "./columns.scss";

const Columns = ({ children }: IColumnsProps) => {
    return <div className="columns">{children}</div>;
};

export { Columns };
