import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/bordered-container.scss';

const Container = ({
    title,
    children
})=> {    
    return (
        <div className='bordered-container'>
            <h1>{title}</h1> 
            {children}
        </div>
    );
};

Container.propTypes = {
    title: PropTypes.string
};

export default Container;