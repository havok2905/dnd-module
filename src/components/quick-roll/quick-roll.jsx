import React, { Component } from "react";
import DiceRoller from "../../services/dice-roller";

import "./quick-roll.scss";

class QuickRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roll: 0
        };
    }

    rollDice(numSides) {
        const roll = DiceRoller.rollDice(1, numSides);
        this.setState({ roll });
    }

    render() {
        return (
            <form className="quick-roll">
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.rollDice.bind(this, 4)}
                >
                    4
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.rollDice.bind(this, 6)}
                >
                    6
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.rollDice.bind(this, 8)}
                >
                    8
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.rollDice.bind(this, 10)}
                >
                    10
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.rollDice.bind(this, 12)}
                >
                    12
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.rollDice.bind(this, 20)}
                >
                    20
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.rollDice.bind(this, 100)}
                >
                    100
                </button>
                <p>
                    Roll: <span>{this.state.roll}</span>
                </p>
            </form>
        );
    }
}

export { QuickRoll };
