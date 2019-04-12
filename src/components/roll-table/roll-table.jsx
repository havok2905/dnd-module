import React, { Component } from "react";
import PropTypes from "prop-types";
import { DiceRoller } from "../../services/dice-roller";
import { Button } from "../button/button.tsx";

import "./roll-table.scss";
import "../../styles/base/table.scss";

class RollTable extends Component {
    constructor(props) {
        super(props);
        this.state = { roll: null };
    }

    findMax() {
        let max = 1;

        this.props.items.forEach(item => {
            item.rollRange.forEach(value => {
                if (value > max) {
                    max = value;
                }
            });
        });

        return max;
    }

    roll() {
        const max = this.findMax();
        const roll = DiceRoller.roll(`1d${max}`);
        this.setState({ roll });
    }

    rollTableRows() {
        return this.props.items.map((item, index) => {
            const a = item.rollRange[0];
            const b = item.rollRange[1];
            const roll = this.state.roll;
            const isInRange = roll === a || (roll >= a && roll <= b);
            const classString = isInRange ? "roll-table__row--highlighted" : "";

            return (
                <tr key={index} className={classString}>
                    <td>{item.rollRange.join(",")}</td>
                    <td>{item.description}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <section className="roll-table">
                <Button
                    onClick={this.roll.bind(this)}
                    qaTarget="roll-table-button"
                    text="Roll"
                    type="button"
                />
                <p>Roll: {this.state.roll}</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Roll</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>{this.rollTableRows()}</tbody>
                </table>
            </section>
        );
    }
}

RollTable.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            rollRange: PropTypes.arrayOf(PropTypes.number).isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
};

export { RollTable };
