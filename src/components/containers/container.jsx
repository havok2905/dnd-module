import React from 'react';
import PropTypes from 'prop-types';
import './bordered-container.scss';

const Container = ({
    title,
    idSlug,
    children
})=> {    
    return (
        <div className='bordered-container'>
            <h1 id={idSlug}>{title}</h1> 
            {children}
        </div>
    );
};

Container.propTypes = {
    title: PropTypes.string.isRequired,
    idSlug: PropTypes.string
};

export { Container };