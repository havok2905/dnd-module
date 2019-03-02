import React from 'react';
import PropTypes from 'prop-types';
import './emphasis-block.scss';

const EmphasisBlock = ({
    children,
    idSlug
})=> {
    return (
        <section
            id={idSlug}
            className='emphasis-block'>
            {children}
        </section>
    );
};

EmphasisBlock.propTypes = {
    idSlug: PropTypes.string
};

export { EmphasisBlock };