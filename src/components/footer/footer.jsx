import React from 'react';
import { RollForm } from '../roll-form/roll-form.jsx';
import { Button } from '../button/button.jsx';

import './footer.scss';

const Footer = ()=> {
    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    };

    return (
        <footer className='footer'>
            <Button onClick={scrollToTop}
                    qaTarget='scroll-to-top-button'
                    text='Back to Top'
                    type='Button'/>
            <RollForm/>
        </footer>
    );
}

export { Footer };