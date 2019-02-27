import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/bordered-container.scss';
import '../styles/components/button.scss';

class CollapsableContainer extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        idSlug: PropTypes.string,
    };
    
    constructor(props) {
        super(props);
        this.state = { display: false }
    }

    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }

    render() {
        return (
            <div className='bordered-container'>
                <h1 id={this.props.idSlug}
                    data-qa-target='collapsable-container-title'>
                    {this.props.title}
                </h1>
                <button className='button'
                        data-qa-target='collapsable-container-button'
                        onClick={this.toggleDisplay.bind(this)}>
                    Toggle
                </button>
                <div data-qa-target='collapsable-container-children'>
                    {this.state.display ? this.props.children : null}
                </div>
            </div>
        );
    }
}

export default CollapsableContainer;