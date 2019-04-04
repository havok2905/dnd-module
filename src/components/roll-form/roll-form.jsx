import React, { Component } from "react";
import DiceRoller from "../../services/dice-roller";

import "./roll-form.scss";

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

        this.rollInputRef.current.value = "";

        this.setState({ roll });
    }

    rollDice(numSides) {
        const roll = DiceRoller.rollDice(1, numSides);
        this.setState({ roll });
    }

    render() {
        return (
            <form className="roll-form" onSubmit={this.roll.bind(this)}>
                <input
                    ref={this.rollInputRef}
                    type="text"
                    placeholder="1d20+0"
                />
                <span>
                    Roll:
                    <span data-qa-target="roll-form-result">
                        {this.state.roll}
                    </span>
                </span>
            </form>
        );
    }
}

export { RollForm };
