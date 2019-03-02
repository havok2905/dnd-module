import React from 'react';
import { RollForm } from './roll-form';
import '../styles/components/footer.scss';

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
            <button onClick={scrollToTop} className='button'>
                Back To Top
            </button>
            <RollForm/>
        </footer>
    );
}

export { Footer };