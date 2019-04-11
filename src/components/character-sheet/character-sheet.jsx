import React from "react";
import PropTypes from "prop-types";
import { SavingThrowBlock } from "../saving-throw-block/saving-throw-block";
import { SkillsBlock } from "../skills-block/skills-block";
import { StatBlock } from "../stat-block/stat-block";
import { skillCalculator } from "../../services/skill-calculator";

const CharacterSheet = ({
    armorProficiencies,
    background,
    classes,
    description,
    expertises,
    hp,
    languages,
    proficiencies,
    proficiencyBonus,
    race,
    savingThrowExpertises,
    savingThrowProficiencies,
    senses,
    speed,
    spellSlots,
    stats,
    toolProficiencies,
    weaponProficiencies
}) => {
    const getCharacterLevel = () => {
        return (
            <p>
                <strong>
                    {classes
                        .map(item => {
                            return `${item.classObj.name} ${item.level}`;
                        })
                        .join(" / ")}
                </strong>
            </p>
        );
    };

    const getCharacterProficiencyList = collection => {
        return (
            <ul>
                {collection.map((prof, index) => {
                    return <li key={index}>{prof}</li>;
                })}
            </ul>
        );
    };

    const getCharacterSpeed = () => {
        return speed.map((item, index) => {
            return (
                <p key={index}>
                    <strong>{item.name}: </strong>
                    <span>{item.value}</span>
                </p>
            );
        });
    };

    const getPassiveScore = (statKey, skillKey) => {
        return skillCalculator(
            {
                hasExpertise: !!expertises[skillKey],
                hasProficiency: !!proficiencies[skillKey]
            },
            stats[statKey],
            proficiencyBonus
        );
    };

    const getPassivePerception = () => {
        return (
            <p>
                <strong>Passive Perception: </strong>
                {getPassiveScore("wis", "perception")}
            </p>
        );
    };

    const getPassiveInsight = () => {
        return (
            <p>
                <strong>Passive Insight: </strong>
                {getPassiveScore("wis", "insight")}
            </p>
        );
    };

    const getPassiveInvestigation = () => {
        return (
            <p>
                <strong>Passive Investigation: </strong>
                {getPassiveScore("int", "investigation")}
            </p>
        );
    };

    const getSenses = () => {
        return senses.map((sense, index) => {
            return (
                <p key={index}>
                    <strong>{sense.name}: </strong>
                    {sense.value}
                </p>
            );
        });
    };

    const hasSpellSlots = () => {
        const count = spellSlots.reduce((a, b) => {
            return a.count + b.count;
        });

        return count > 1;
    };

    const getSpellSlots = () => {
        return (
            hasSpellSlots && (
                <ul>
                    {spellSlots
                        .filter(item => {
                            return item.count > 0;
                        })
                        .map((item, index) => {
                            return (
                                <li key={index}>
                                    <strong>Level {index + 1}: </strong>
                                    {item.count}
                                </li>
                            );
                        })}
                </ul>
            )
        );
    };

    return (
        <article className="character-sheet">
            <h1>Character Name</h1>
            {getCharacterLevel()}
            <p>
                <strong>Race: </strong>
                {race}
            </p>
            <p>
                <strong>Background: </strong>
                {background}
            </p>
            <p>
                <strong>Alignment: </strong>
                {description.alignment}
            </p>
            <p>
                <strong>Faith: </strong>
                {description.faith}
            </p>
            <p>
                <strong>Gender: </strong>
                {description.gender}
            </p>
            <p>
                <strong>Age: </strong>
                {description.age}
            </p>
            <p>
                <strong>Size: </strong>
                {description.size}
            </p>
            <p>
                <strong>Height: </strong>
                {description.height}
            </p>
            <p>
                <strong>Weight: </strong>
                {description.weight}
            </p>
            <p>
                <strong>Skin: </strong>
                {description.eyes}
            </p>
            <p>
                <strong>Eyes: </strong>
                {description.eyes}
            </p>
            <p>
                <strong>Hair: </strong>
                {description.hair}
            </p>
            <h2>Stats</h2>
            <p>
                <strong>Current Hp: </strong>
                <span>{hp.currentHp}</span>
            </p>
            <p>
                <strong>Temp Hp: </strong>
                <span>{hp.tempHp}</span>
            </p>
            <p>
                <strong>Max: </strong>
                <span>{hp.maxHp}</span>
            </p>
            <p>
                <strong>Proficiency Bonus: </strong>
                <span>{proficiencyBonus}</span>
            </p>
            <h2>Proficiencies and Languages</h2>
            <h3>Armor</h3>
            {getCharacterProficiencyList(armorProficiencies)}
            <h3>Weapons</h3>
            {getCharacterProficiencyList(weaponProficiencies)}
            <h3>Tools</h3>
            {getCharacterProficiencyList(toolProficiencies)}
            <h3>Languages</h3>
            {getCharacterProficiencyList(languages)}
            <h2>Speed</h2>
            {getCharacterSpeed()}
            <h2>Senses</h2>
            {getPassivePerception()}
            {getPassiveInsight()}
            {getPassiveInvestigation()}
            {getSenses()}
            <h2>Stats</h2>
            <StatBlock stats={stats} />
            <h2>Saving Throws</h2>
            <SavingThrowBlock
                proficiencyBonus={proficiencyBonus}
                savingThrowExpertises={savingThrowExpertises}
                savingThrowProficiencies={savingThrowProficiencies}
                stats={stats}
            />
            <h2>Abilities</h2>
            <SkillsBlock
                classes={classes}
                expertises={expertises}
                proficiencies={proficiencies}
                proficiencyBonus={proficiencyBonus}
                stats={stats}
            />
            <h2>Actions</h2>
            <h2>Bonus Actions</h2>
            <h2>Reactions</h2>
            <h2>Special</h2>
            <h2>Features</h2>
            <h2>Spells</h2>
            <h3>Spell Slots</h3>
            {getSpellSlots()}
            <h3>List</h3>
            <h2>Description</h2>
            <h3>Personality Traits</h3>
            <ul>
                {description.personalityTraits.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <h3>Ideals</h3>
            <ul>
                {description.ideals.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <h3>Bonds</h3>
            <ul>
                {description.bonds.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <h3>Flaws</h3>
            <ul>
                {description.flaws.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <h3>Alies and Organizations</h3>
            <p>{description.notes}</p>
            <h3>Appearance</h3>
            <p>{description.appearance}</p>
            <h3>Notes</h3>
            <p>{description.notes}</p>
        </article>
    );
};

CharacterSheet.propTypes = {
    armorProficiencies: PropTypes.arrayOf(PropTypes.string),
    background: PropTypes.string,
    classes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            level: PropTypes.number.isRequired,
            bonusMiddleware: PropTypes.func
        })
    ).isRequired,
    description: PropTypes.shape({
        age: PropTypes.number,
        alignment: PropTypes.string.isRequired,
        alliesAndOrganizations: PropTypes.string,
        appearance: PropTypes.string,
        backstory: PropTypes.string,
        bonds: PropTypes.arrayOf(PropTypes.string).isRequired,
        eyes: PropTypes.string,
        faith: PropTypes.string,
        flaws: PropTypes.arrayOf(PropTypes.string).isRequired,
        gender: PropTypes.string,
        hair: PropTypes.string,
        height: PropTypes.string,
        ideals: PropTypes.arrayOf(PropTypes.string).isRequired,
        notes: PropTypes.string,
        personalityTraits: PropTypes.arrayOf(PropTypes.string).isRequired,
        size: PropTypes.string,
        skin: PropTypes.string,
        weight: PropTypes.string
    }).isRequired,
    expertises: PropTypes.object.isRequired,
    hp: PropTypes.object.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
    proficiencies: PropTypes.object.isRequired,
    proficiencyBonus: PropTypes.number.isRequired,
    race: PropTypes.string.isRequired,
    savingThrowExpertises: PropTypes.arrayOf(
        PropTypes.oneOf(["str", "dex", "con", "int", "wis", "cha"])
    ).isRequired,
    savingThrowProficiencies: PropTypes.arrayOf(
        PropTypes.oneOf(["str", "dex", "con", "int", "wis", "cha"])
    ).isRequired,
    senses: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    speed: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    spellSlots: PropTypes.arrayOf(
        PropTypes.shape({
            count: PropTypes.number.isRequired
        })
    ),
    stats: PropTypes.shape({
        str: PropTypes.number.isRequired,
        dex: PropTypes.number.isRequired,
        con: PropTypes.number.isRequired,
        int: PropTypes.number.isRequired,
        wis: PropTypes.number.isRequired,
        cha: PropTypes.number.isRequired
    }).isRequired,
    toolProficiencies: PropTypes.arrayOf(PropTypes.string),
    weaponProficiencies: PropTypes.arrayOf(PropTypes.string)
};

CharacterSheet.defaultProps = {
    armorProficiencies: [],
    background: "",
    languages: ["Common"],
    senses: [],
    toolProficiencies: [],
    weaponProficiencies: []
};

export { CharacterSheet };
