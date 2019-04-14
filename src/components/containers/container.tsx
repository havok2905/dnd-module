import * as React from "react";
import { IContainerProps } from "./interfaces/i-container-props";

const Container = ({ children }: IContainerProps) => {
    return <div className="bordered-container">{children}</div>;
};

export { Container };
