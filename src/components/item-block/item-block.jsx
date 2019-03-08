import React from 'react';
import PropTypes from 'prop-types';

const itemBlockPropTypes = {
    image: PropTypes.string,
    name: PropTypes.shape.isRequired,
    type: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired
};

const ItemBlock = ({
    children,
    image,
    name,
    rarity,
    type
})=> {
    return (
        <section className='item-block'>
            <h2>{name}</h2>
            <p>{type}, {rarity}</p>
            { image && <img src={image} alt={name}/> }
            {children}
        </section>
    );
};

ItemBlock.prototypes = itemBlockPropTypes;

export { ItemBlock };