import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
    onClick,
    qaTarget,
    text,
    type
})=> {
    return (
        <button className='button'
                data-qa-target={qaTarget}
                onClick={onClick}
                type={type}>
            {text}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    qaTarget: PropTypes.string,
    text:  PropTypes.string.isRequired,
    type:  PropTypes.string.isRequired
};

Button.defaultProps = {
    qaTarget: '',
    onClick: ()=> {}
};

export { Button };