import React from 'react';

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