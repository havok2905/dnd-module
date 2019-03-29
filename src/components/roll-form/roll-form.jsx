import React, { Component, Fragment } from 'react';
import DiceRoller from '../../services/dice-roller';

import './roll-form.scss';

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

        this.rollInputRef.current.value = '';

        this.setState({ roll }); 
    }

    rollDice(numSides) {
        const roll = DiceRoller.rollDice(1, numSides);
        this.setState({ roll });
    }

    render() {
        return (
            <form className='roll-form' onSubmit={this.roll.bind(this)}>
                <p>Roll: <span>{this.state.roll}</span></p>
                <input ref={this.rollInputRef} type='text' placeholder='1d20+0'/>
                <button className='roll-form__submit-button' type='submit'>Roll</button>
                <button className='roll-form__dice-button' type='button' onClick={this.rollDice.bind(this, 4)}>4</button>
                <button className='roll-form__dice-button' type='button' onClick={this.rollDice.bind(this, 6)}>6</button>
                <button className='roll-form__dice-button' type='button' onClick={this.rollDice.bind(this, 8)}>8</button>
                <button className='roll-form__dice-button' type='button' onClick={this.rollDice.bind(this, 10)}>10</button>
                <button className='roll-form__dice-button' type='button' onClick={this.rollDice.bind(this, 12)}>12</button>
                <button className='roll-form__dice-button' type='button' onClick={this.rollDice.bind(this, 20)}>20</button>
                <button className='roll-form__dice-button' type='button' onClick={this.rollDice.bind(this, 100)}>100</button>
            </form>
        );
    }
}

export { RollForm };