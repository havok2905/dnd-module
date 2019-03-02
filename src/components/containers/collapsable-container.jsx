import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/button.jsx';

import './bordered-container.scss';

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
                <Button onClick={this.toggleDisplay.bind(this)}
                        qaTarget='collapsable-container-button'
                        type='button'
                        text='Toggle'/>
                <div data-qa-target='collapsable-container-children'>
                    {this.state.display ? this.props.children : null}
                </div>
            </div>
        );
    }
}

export { CollapsableContainer };