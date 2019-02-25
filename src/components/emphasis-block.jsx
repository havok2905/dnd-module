import React from 'react';
import '../styles/components/emphasis-block.scss';

const EmphasisBlock = ({
    children
})=> {
    return (
        <section className='emphasis-block'>
            {children}
        </section>
    );
};

export default EmphasisBlock;