import React from 'react';
import './columns.scss';

const Columns = ({
    children
})=> {    
    return (
        <div className='columns'>
            {children}
        </div>
    );
};

export { Columns };