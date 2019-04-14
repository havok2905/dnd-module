import React, { Component } from "react";
import { DiceRoller } from "../../services/dice-roller";
import { IQuickRollState } from "./interfaces/i-quick-roll-state";

class QuickRoll extends Component<any, IQuickRollState> {
    constructor(props) {
        super(props);
        this.state = {
            roll: 0
        };
    }

    roll(str) {
        const roll = DiceRoller.roll(str);
        this.setState({ roll });
    }

    render() {
        return (
            <form className="quick-roll">
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.roll.bind(this, "1d4")}
                >
                    4
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.roll.bind(this, "1d6")}
                >
                    6
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.roll.bind(this, "1d8")}
                >
                    8
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.roll.bind(this, "1d10")}
                >
                    10
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.roll.bind(this, "1d12")}
                >
                    12
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.roll.bind(this, "1d20")}
                >
                    20
                </button>
                <button
                    className="quick-roll__dice-button"
                    type="button"
                    onClick={this.roll.bind(this, "1d100")}
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
