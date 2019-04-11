import React from "react";
import PropTypes from "prop-types";
import { skillCalculator } from "../../services/skill-calculator";
import AbilityScoreCalculator from "../../services/ability-score-calculator";
import { SKILLS } from "../../constants/skills";
import { ABILITIES } from "../../constants/abilities";

const SkillsBlock = ({
    classes,
    expertises,
    proficiencies,
    proficiencyBonus,
    stats
}) => {
    const proficiencyString = skillKey => {
        if (expertises[skillKey]) {
            return "E";
        }

        if (proficiencies[skillKey]) {
            return "P";
        }

        return "/";
    };

    const getMiddleware = () => {
        return classes
            .map(classDefinition => {
                return classDefinition.classObj.levels
                    .filter(level => {
                        return (
                            level.skillScoreMiddleware &&
                            level.skillScoreMiddleware.length > 0
                        );
                    })
                    .map(level => {
                        return level.skillScoreMiddleware;
                    });
            })
            .flat(2);
    };

    const getScore = skillKey => {
        let score = skillCalculator(
            {
                hasExpertise: !!expertises[skillKey],
                hasProficiency: !!proficiencies[skillKey]
            },
            AbilityScoreCalculator.getModifier(stats[SKILLS[skillKey].type]),
            proficiencyBonus,
            getMiddleware()
        );

        return score;
    };

    return (
        <table className="table table--center">
            <thead>
                <tr>
                    <th scope="col">Prof</th>
                    <th scope="col">Mod</th>
                    <th scope="col">Skill</th>
                    <th scope="col">Bonus</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(SKILLS).map((skillKey, index) => {
                    return (
                        <tr key={index}>
                            <td>{proficiencyString(skillKey)}</td>
                            <td>{ABILITIES[SKILLS[skillKey].type]}</td>
                            <td>{SKILLS[skillKey].name}</td>
                            <td>{getScore(skillKey)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

SkillsBlock.propTypes = {
    proficiencyBonus: PropTypes.number.isRequired
};

export { SkillsBlock };
