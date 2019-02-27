import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/collapsable-container.scss';

class CollapsableContainer extends Component {
    static propTypes = {
        title: PropTypes.string
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
            <div className='collapsable-container'>
                <button data-qa-target='collapsable-container-button'
                        onClick={this.toggleDisplay.bind(this)}>
                    Toggle
                </button>
                <h1 data-qa-target='collapsable-container-title'>{this.props.title}</h1>
                <div data-qa-target='collapsable-container-children'>
                    {this.state.display ? this.props.children : null}
                </div>
            </div>
        );
    }
}

export default CollapsableContainer;