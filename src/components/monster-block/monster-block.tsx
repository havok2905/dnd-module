import React, { Fragment } from "react";
import { AbilityScoreCalculator } from "../../services/ability-score-calculator";
import { ICreature } from "../../interfaces/i-creature";

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
    languages: []
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
}: ICreature) => {
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
            <table className="table table--center">
                <thead>
                    <tr>
                        <th scope="col">STR</th>
                        <th scope="col">DEX</th>
                        <th scope="col">CON</th>
                        <th scope="col">INT</th>
                        <th scope="col">WIS</th>
                        <th scope="col">CHA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stats.str}</td>
                        <td>{stats.dex}</td>
                        <td>{stats.con}</td>
                        <td>{stats.int}</td>
                        <td>{stats.wis}</td>
                        <td>{stats.cha}</td>
                    </tr>
                    <tr>
                        <td>{AbilityScoreCalculator.getModifier(stats.str)}</td>
                        <td>{AbilityScoreCalculator.getModifier(stats.dex)}</td>
                        <td>{AbilityScoreCalculator.getModifier(stats.con)}</td>
                        <td>{AbilityScoreCalculator.getModifier(stats.int)}</td>
                        <td>{AbilityScoreCalculator.getModifier(stats.wis)}</td>
                        <td>{AbilityScoreCalculator.getModifier(stats.cha)}</td>
                    </tr>
                </tbody>
            </table>
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

MonsterBlock.defaultProps = MonsterBlockDefaultProps;

export { MonsterBlock };
