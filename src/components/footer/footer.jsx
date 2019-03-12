import React, { Component } from 'react';
import { RollForm } from '../roll-form/roll-form.jsx';
import { Button } from '../button/button.jsx';
import { QuickRef } from '../quick-ref/quick-ref.jsx';
import Modal from 'react-modal';

import './footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    toggleModal() {
        this.setState({modalIsOpen: !this.state.modalIsOpen});
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <footer className='footer'>
                <Button onClick={this.scrollToTop.bind(this)}
                        qaTarget='scroll-to-top-button'
                        text='Back to Top'
                        type='Button'/>
                <Button onClick={this.toggleModal.bind(this)}
                        qaTarget='quick-ref-button'
                        text='Toggle Quick Ref'
                        type='Button'/>
                <RollForm/>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal.bind(this)}
                    contentLabel="Example Modal"
                    style={{overlay:{ zIndex: 9000}}}>
                    <QuickRef/>
                </Modal>
            </footer>
        );
    }
} 

export { Footer };