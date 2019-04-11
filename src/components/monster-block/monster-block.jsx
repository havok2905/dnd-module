import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { StatBlock } from "../stat-block/stat-block";
import "./monster-block.scss";

const MonsterBlockPropTypes = {
    ac: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ),
    alignment: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    conditionImmunities: PropTypes.arrayOf(PropTypes.string),
    damageImmunities: PropTypes.arrayOf(PropTypes.string),
    damageResistances: PropTypes.arrayOf(PropTypes.string),
    damageWeaknesses: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    features: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ),
    hp: PropTypes.number.isRequired,
    image: PropTypes.string,
    inventory: PropTypes.arrayOf(PropTypes.string),
    languages: PropTypes.arrayOf(PropTypes.string),
    reactions: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ),
    savingThrows: PropTypes.arrayOf(PropTypes.string),
    senses: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    speed: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        str: PropTypes.number.isRequired,
        dex: PropTypes.number.isRequired,
        con: PropTypes.number.isRequired,
        int: PropTypes.number.isRequired,
        wis: PropTypes.number.isRequired,
        cha: PropTypes.number.isRequired
    }).isRequired,
    type: PropTypes.string.isRequired
};

const MonsterBlockDefaultProps = {
    actions: [],
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    features: [],
    inventory: [],
    reactions: [],
    savingThrows: [],
    senses: [],
    skills: [],
    languages: [],
    senses: []
};

const MonsterBlock = ({
    ac,
    actions,
    alignment,
    challenge,
    conditionImmunities,
    damageImmunities,
    damageResistances,
    damageWeaknesses,
    description,
    features,
    hp,
    image,
    inventory,
    languages,
    reactions,
    savingThrows,
    senses,
    size,
    skills,
    speed,
    stats,
    type
}) => {
    const renderAttributesSubsection = (label, qaTarget, items) => {
        if (!items || items.length <= 0) {
            return;
        }

        return (
            <Fragment>
                <p>
                    <strong>{label}</strong>
                </p>
                <ul>
                    {items.map((item, index) => (
                        <li key={index} data-qa-target={qaTarget}>
                            {item}
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    };

    const renderFeaturesActionsSpellsSubsection = (label, qaTarget, items) => {
        if (!items || items.length <= 0) {
            return;
        }

        return (
            <Fragment>
                <h4>{label}</h4>
                <dl data-qa-target={qaTarget}>
                    {items.map((item, index) => {
                        return (
                            <div key={index}>
                                <dt>{item.title}</dt>
                                <dd>{item.description}</dd>
                            </div>
                        );
                    })}
                </dl>
            </Fragment>
        );
    };

    const renderDescription = () => {
        if (!description) {
            return;
        }

        return (
            <Fragment>
                <h4>Description</h4>
                <p data-qa-target="description">{description}</p>
            </Fragment>
        );
    };

    const renderImage = () => {
        if (!image) {
            return;
        }

        return (
            <img
                data-qa-target="monster-image"
                src={image}
                alt="monster image"
            />
        );
    };

    return (
        <section className="monster-block">
            {renderImage()}
            <p data-qa-target="sub-title">
                {size} {type}, {alignment}
            </p>
            <hr />
            <dl>
                <div>
                    <dt>Armor Class</dt>
                    <dd data-qa-target="ac">{ac}</dd>
                </div>
                <div>
                    <dt>Hit Points</dt>
                    <dd data-qa-target="hp">{hp}</dd>
                </div>
                <div>
                    <dt>Speed</dt>
                    <dd data-qa-target="speed">{speed}</dd>
                </div>
            </dl>
            <hr />
            <StatBlock />
            <hr />
            {renderAttributesSubsection(
                "Saving Throws",
                "saving-throws",
                savingThrows
            )}
            {renderAttributesSubsection("Skills", "skills", skills)}
            {renderAttributesSubsection(
                "Condition Immunities",
                "condition-immunities",
                conditionImmunities
            )}
            {renderAttributesSubsection(
                "Damage Immunities",
                "damage-immunities",
                damageImmunities
            )}
            {renderAttributesSubsection(
                "Damage Resistances",
                "damage-resistances",
                damageResistances
            )}
            {renderAttributesSubsection(
                "Damage Weaknesses",
                "damage-weaknesses",
                damageWeaknesses
            )}
            {renderAttributesSubsection("Languages", "languages", languages)}
            {renderAttributesSubsection("Senses", "senses", senses)}
            <p data-qa-target="challenge">
                <strong>Challenge</strong> {challenge}
            </p>
            {renderDescription()}
            {renderAttributesSubsection("Inventory", "inventory", inventory)}
            {renderFeaturesActionsSpellsSubsection(
                "Features",
                "features",
                features
            )}
            {renderFeaturesActionsSpellsSubsection(
                "Reactions",
                "reactions",
                reactions
            )}
            {renderFeaturesActionsSpellsSubsection(
                "Actions",
                "actions",
                actions
            )}
        </section>
    );
};

MonsterBlock.propTypes = MonsterBlockPropTypes;

MonsterBlock.defaultProps = MonsterBlockDefaultProps;

export { MonsterBlock };
