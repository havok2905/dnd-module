import * as React from "react";
import { IColumnsProps } from "./interfaces/i-columns-props";

const Columns = ({ children }: IColumnsProps) => {
    return <div className="columns">{children}</div>;
};

export { Columns };
