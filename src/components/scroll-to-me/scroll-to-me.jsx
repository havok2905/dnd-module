import React from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

const ScrollToMe = ({
    children,
    scrollActionString
})=> {
    return (
        <div ref={(section)=> {
            PubSub.subscribe(scrollActionString, ()=> {
                section.scrollIntoView();
            });
        }}>
            {children}
        </div>
    )
}

ScrollToMe.propTypes = {
    scrollActionString: PropTypes.string
};

export { ScrollToMe };