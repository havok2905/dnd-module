import React from 'react';
import '../styles/components/columns.scss';

const Columns = ({
    children
})=> {    
    return (
        <div className='columns'>
            {children}
        </div>
    );
};

export default Columns;