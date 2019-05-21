import React, { Component } from "react";
import { DiceRoller } from "../../services/dice-roller";
import { IRollFormState } from "./interfaces/i-roll-form-state";

class RollForm extends Component<any, IRollFormState> {
    private rollInputRef: React.RefObject<any>;

    constructor(props: any) {
        super(props);
        this.state = {
            roll: 0
        };

        this.rollInputRef = React.createRef();
    }

    private roll(e: any) {
        e.preventDefault();

        const str = this.rollInputRef.current.value;
        const roll = DiceRoller.roll(str);

        this.rollInputRef.current.value = "";

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
                    <span data-qa-target="roll-form-result">
                        {this.state.roll}
                    </span>
                </span>
            </form>
        );
    }
}

export { RollForm };
