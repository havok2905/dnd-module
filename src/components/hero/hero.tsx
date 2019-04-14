import React from "react";
import { IHeroProps } from "./interfaces/i-hero-props";

const Hero = ({ alt, src }: IHeroProps) => {
    return <img className="hero" src={src} alt={alt} />;
};

export { Hero };
