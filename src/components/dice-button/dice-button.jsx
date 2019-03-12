import React, { Component, Fragment } from 'react';
import DiceRoller from '../../services/dice-roller';

class DiceButton extends Component {
    constructor(props) {
        super(props);
        this.state = { roll: 0 };
    }

    rollDice(numSides) {
        const roll = DiceRoller.rollDice(1, numSides);
        console.log(this, 'ths');
        this.setState({ roll });
    }

    render() {
        return (
            <Fragment>
                <p>Roll: { this.state.roll }</p>
                <button onClick={this.rollDice.bind(this, 4)}>4</button>
                <button onClick={this.rollDice.bind(this, 6)}>6</button>
                <button onClick={this.rollDice.bind(this, 8)}>8</button>
                <button onClick={this.rollDice.bind(this, 10)}>10</button>
                <button onClick={this.rollDice.bind(this, 12)}>12</button>
                <button onClick={this.rollDice.bind(this, 20)}>20</button>
                <button onClick={this.rollDice.bind(this, 100)}>100</button>
            </Fragment>     
        );
    }
};

export { DiceButton };