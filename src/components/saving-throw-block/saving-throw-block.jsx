import React from "react";
import PropTypes from "prop-types";
import { skillCalculator } from "../../services/skill-calculator";
import AbilityScoreCalculator from "../../services/ability-score-calculator";
import { ABILITIES } from "../../constants/abilities";

const SavingThrowBlock = ({
    proficiencyBonus,
    savingThrowExpertises,
    savingThrowProficiencies,
    stats: { str, dex, con, int, wis, cha }
}) => {
    const score = (key, score) => {
        return skillCalculator(
            {
                hasExpertise: savingThrowExpertises.includes(key),
                hasProficiency: savingThrowProficiencies.includes(key)
            },
            AbilityScoreCalculator.getModifier(score),
            proficiencyBonus
        );
    };

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
                    <td>{score("str", str)}</td>
                    <td>{score("dex", dex)}</td>
                    <td>{score("con", con)}</td>
                    <td>{score("int", int)}</td>
                    <td>{score("wis", wis)}</td>
                    <td>{score("cha", cha)}</td>
                </tr>
            </tbody>
        </table>
    );
};

SavingThrowBlock.propTypes = {
    proficiencyBonus: PropTypes.number.isRequired,
    savingThrowExpertises: PropTypes.arrayOf(
        PropTypes.oneOf(["str", "dex", "con", "int", "wis", "cha"])
    ).isRequired,
    savingThrowProficiencies: PropTypes.arrayOf(
        PropTypes.oneOf(["str", "dex", "con", "int", "wis", "cha"])
    ).isRequired,
    stats: PropTypes.shape({
        str: PropTypes.number.isRequired,
        dex: PropTypes.number.isRequired,
        con: PropTypes.number.isRequired,
        int: PropTypes.number.isRequired,
        wis: PropTypes.number.isRequired,
        cha: PropTypes.number.isRequired
    }).isRequired
};

export { SavingThrowBlock };
