import React from "react";
import PropTypes from "prop-types";
import AbilityScoreCalculator from "../../services/ability-score-calculator";
import { ABILITIES } from "../../constants/abilities";

const StatBlock = ({ stats: { str, dex, con, int, wis, cha } }) => {
    return (
        <table className="table table--center">
            <thead>
                <tr>
                    <th scope="col">{ABILITIES.str}</th>
                    <th scope="col">{ABILITIES.dex}</th>
                    <th scope="col">{ABILITIES.con}</th>
                    <th scope="col">{ABILITIES.int}</th>
                    <th scope="col">{ABILITIES.wis}</th>
                    <th scope="col">{ABILITIES.cha}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{str}</td>
                    <td>{dex}</td>
                    <td>{con}</td>
                    <td>{int}</td>
                    <td>{wis}</td>
                    <td>{cha}</td>
                </tr>
                <tr>
                    <td>{AbilityScoreCalculator.getModifier(str)}</td>
                    <td>{AbilityScoreCalculator.getModifier(dex)}</td>
                    <td>{AbilityScoreCalculator.getModifier(con)}</td>
                    <td>{AbilityScoreCalculator.getModifier(int)}</td>
                    <td>{AbilityScoreCalculator.getModifier(wis)}</td>
                    <td>{AbilityScoreCalculator.getModifier(cha)}</td>
                </tr>
            </tbody>
        </table>
    );
};

StatBlock.propTypes = {
    stats: PropTypes.shape({
        str: PropTypes.number.isRequired,
        dex: PropTypes.number.isRequired,
        con: PropTypes.number.isRequired,
        int: PropTypes.number.isRequired,
        wis: PropTypes.number.isRequired,
        cha: PropTypes.number.isRequired
    }).isRequired
};

export { StatBlock };
