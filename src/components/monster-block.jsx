import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/monster-block.scss';

import AbilityScoreCalculator from '../services/ability-score-calculator';

const MonsterBlockPropTypes = {
    ac: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
    alignment: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    conditionImmunities: PropTypes.arrayOf(PropTypes.string),
    damageImmunities: PropTypes.arrayOf(PropTypes.string),
    damageResistances: PropTypes.arrayOf(PropTypes.string),
    damageWeaknesses: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
    hp: PropTypes.number.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
    reactions: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
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
        cha: PropTypes.number.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
};

const MonsterBlockDefaultProps = {
    actions: [],
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    features: [],
    reactions: [],
    savingThrows: [],
    senses: [],
    skills: [],
    languages: [],
    senses: []
}

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
    languages,
    reactions,
    savingThrows,
    senses,
    size,
    skills,
    speed,
    stats,
    type
})=> {

    const renderAttributesSubsection = (label, qaTarget, items)=> {
        if(!items || items.length <= 0) {
            return;
        }

        return (
            <Fragment>
                <p><strong>{label}</strong></p>
                <ul>
                    {items.map(item => <li data-qa-target={qaTarget}>{item}</li>)}
                </ul>
            </Fragment>
        );
    };

    const renderFeaturesActionsSpellsSubsection = (label, qaTarget, items)=> {
        if(!items || items.length <= 0) {
            return;
        }

        return (
            <Fragment>
                <h2>{label}</h2>
                <dl data-qa-target={qaTarget}>
                    {
                        items.map((item) => {
                            return (
                                <div>
                                    <dt>{item.title}</dt>
                                    <dd>{item.description}</dd>
                                </div>
                            );
                        })
                    }
                </dl>
            </Fragment>
        );
    };

    const renderDescription = ()=> {
        if(!description) {
            return;
        }

        return (
            <Fragment>
                <h2>Description</h2>
                <p data-qaTarget='description'>{description}</p>
            </Fragment>
        )
    }

    return (
        <section className='monster-block'>
            <p data-qa-target='sub-title'>{size} {type}, {alignment}</p>
            <hr/>
            <dl>
                <div>
                    <dt>Armor Class</dt>
                    <dd data-qa-target='ac'>{ac}</dd>
                </div>
                <div>
                    <dt>Hit Points</dt>
                    <dd data-qa-target='hp'>{hp}</dd>
                </div>
                <div>
                    <dt>Speed</dt>
                    <dd data-qa-target='speed'>{speed}</dd>
                </div>
            </dl>
            <hr/>
            <table>
                <tr>
                    <th scope='col'>STR</th>
                    <th scope='col'>DEX</th>
                    <th scope='col'>CON</th>
                    <th scope='col'>INT</th>
                    <th scope='col'>WIS</th>
                    <th scope='col'>CHA</th>
                </tr>
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
            </table>
            <hr/>
            {renderAttributesSubsection('Saving Throws', 'saving-throws', savingThrows)}
            {renderAttributesSubsection('Skills', 'skills', skills)}
            {renderAttributesSubsection('Condition Immunities', 'condition-immunities', conditionImmunities)}
            {renderAttributesSubsection('Damage Immunities', 'damage-immunities', damageImmunities)}
            {renderAttributesSubsection('Damage Resistances', 'damage-resistances', damageResistances)}
            {renderAttributesSubsection('Damage Weaknesses', 'damage-weaknesses', damageWeaknesses)}
            {renderAttributesSubsection('Languages', 'languages', languages)}
            {renderAttributesSubsection('Senses', 'senses', senses)}
            <p data-qa-target='challenge'><strong>Challenge</strong> {challenge}</p>
            {renderDescription()}
            {renderFeaturesActionsSpellsSubsection('Features', 'features', features)}
            {renderFeaturesActionsSpellsSubsection('Reactions', 'reactions', reactions)}
            {renderFeaturesActionsSpellsSubsection('Actions', 'actions', actions)}
        </section>
    );
};

MonsterBlock.propTypes = MonsterBlockPropTypes;

MonsterBlock.defaultProps = MonsterBlockDefaultProps;

export default MonsterBlock;