import React from 'react';
import '../styles/components/page.scss';

const Page = ({
    children
})=> {    
    return (
        <article className='page'>
            {children}
        </article>
    );
};

export { Page };