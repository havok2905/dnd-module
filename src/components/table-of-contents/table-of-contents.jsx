import React from 'react';
import PropTypes from 'prop-types';

const TableOfContents = ({
    contentsList
})=> {
    return (
        <ol className='table-of-contents-list'>
            {
                contentsList.map((content, index)=> {
                    return (
                        <li key={index}>
                            <a href={content.link}>{content.title}</a>
                            { 
                                content.children && 
                                content.children.length > 0 && 
                                <TableOfContents contentsList={content.children}/>
                            }
                        </li>
                    )
                })
            }
        </ol>
    )
};

TableOfContents.propTypes = {
    contentsList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        children: PropTypes.array
    }))
};

export { TableOfContents };