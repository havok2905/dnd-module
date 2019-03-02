import React, { Component } from 'react';
import DiceRoller from '../../services/dice-roller';

class RollForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roll: 0
        };

        this.rollInputRef = React.createRef();
    }

    roll(e) {
        e.preventDefault();
        const str = this.rollInputRef.current.value;
        const roll = DiceRoller.raw(str);
        this.setState({ roll }); 
    }

    render() {
        return (
            <form onSubmit={this.roll.bind(this)}>
                <input ref={this.rollInputRef} type='text' placeholder='1d20+0'/>
                <button type='submit'>Roll</button>
                <span>Roll: {this.state.roll}</span>
            </form>
        );
    }
}

export { RollForm };