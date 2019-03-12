import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { RollForm } from '../roll-form/roll-form.jsx';
import { Button } from '../button/button.jsx';
import { QuickRef } from '../quick-ref/quick-ref.jsx';
import Modal from 'react-modal';

import './footer.scss';

class Footer extends Component {
    static propTypes = {
        quickRefButton: PropTypes.bool,
        rollForm: PropTypes.bool,
        scrollButton: PropTypes.bool
    };

    static defaultProps = {
        quickRefButton: false,
        rollForm: false,
        scrollButton: false
    };

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

    getScrollToTopButton() {
        if(!this.props.scrollButton) {
            return;
        }

        return <Button onClick={this.scrollToTop.bind(this)}
                       qaTarget='scroll-to-top-button'
                       text='Back to Top'
                       type='Button'/>;
    }

    getQuickRefButton() {
        if(!this.props.quickRefButton) {
            return;
        }

        return (
            <Fragment>
                <Button 
                    onClick={this.toggleModal.bind(this)}
                    qaTarget='quick-ref-button'
                    text='Toggle Quick Ref'
                    type='Button'/>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal.bind(this)}
                    contentLabel="Example Modal"
                    style={{overlay:{ zIndex: 9000}}}>
                    <QuickRef/>
                </Modal>
            </Fragment>
        );
    }

    getRollForm() {
        if(!this.props.rollForm) {
            return;
        }

        return <RollForm/>;
    }

    render() {
        return (
            <footer className='footer'>
                {this.getScrollToTopButton()}
                {this.getQuickRefButton()}
                {this.getRollForm()}
            </footer>
        );
    }
} 

export { Footer };