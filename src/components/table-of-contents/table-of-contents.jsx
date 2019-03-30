import React from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

const TableOfContents = ({
    contentsList,
    hashReferencesSupported
})=> {
    return (
        <ol className='table-of-contents-list'>
            {
                contentsList.map((content, index)=> {
                    return (
                        <li key={index}>
                            <a onClick={(e)=> {
                                    if(!hashReferencesSupported) {
                                        e.preventDefault();
                                        PubSub.publish(content.scrollActionString);
                                    }
                                }}
                                href={content.link}>
                                {content.title}
                            </a>
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
        children: PropTypes.array,
        scrollActionString: PropTypes.string
    })),
    hashReferencesSupported: PropTypes.bool,
};

TableOfContents.defaultProps = {
    hashReferencesSupported: true
};

export { TableOfContents };