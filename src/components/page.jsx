import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/page.scss';

const Container = ({
    children
})=> {    
    return (
        <article className='page'>
            {children}
        </article>
    );
};

export default Container;