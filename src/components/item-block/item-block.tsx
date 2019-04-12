import React from "react";
import { IItemBlockProps } from "./interfaces/i-item-block-props";

const ItemBlock = ({
    children,
    image,
    name,
    rarity,
    type
}: IItemBlockProps) => {
    return (
        <section className="item-block">
            <h3>{name}</h3>
            <p>
                {type}, {rarity}
            </p>
            {image && <img src={image} alt={name} />}
            {children}
        </section>
    );
};

export { ItemBlock };
