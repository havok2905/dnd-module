import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/monster-block.scss';

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
    title: PropTypes.string.isRequired,
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
    title,
    type
})=> {

    const renderAttributesSubsection = (label, items)=> {
        if(!items || items.length <= 0) {
            return;
        }

        return (
            <Fragment>
                <p><strong>{label}</strong></p>
                <ul>
                    {items.map(item => <li>{item}</li>)}
                </ul>
            </Fragment>
        );
    };

    const renderFeaturesActionsSpellsSubsection = (label, items)=> {
        if(!items || items.length <= 0) {
            return;
        }

        return (
            <Fragment>
                <h2>{label}</h2>
                <dl>
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
                <p>{description}</p>
            </Fragment>
        )
    }

    return (
        <section className='monster-block'>
            <h1>{title}</h1>
            <p>{size} {type}, {alignment}</p>
            <hr/>
            <dl>
                <div>
                    <dt>Armor Class</dt>
                    <dd>{ac}</dd>
                </div>
                <div>
                    <dt>Hit Points</dt>
                    <dd>{hp}</dd>
                </div>
                <div>
                    <dt>Speed</dt>
                    <dd>{speed}</dd>
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
            </table>
            <hr/>
            {renderAttributesSubsection('SavingThrows', savingThrows)}
            {renderAttributesSubsection('Skills', skills)}
            {renderAttributesSubsection('Condition Immunities', conditionImmunities)}
            {renderAttributesSubsection('Damage Immunities', damageImmunities)}
            {renderAttributesSubsection('Damage Resistances', damageResistances)}
            {renderAttributesSubsection('Damage Weaknesses', damageWeaknesses)}
            {renderAttributesSubsection('Languages', languages)}
            {renderAttributesSubsection('Senses', senses)}
            <p><strong>Challenge</strong> {challenge}</p>
            {renderDescription()}
            {renderFeaturesActionsSpellsSubsection('Features', features)}
            {renderFeaturesActionsSpellsSubsection('Reactions', reactions)}
            {renderFeaturesActionsSpellsSubsection('Actions', actions)}
        </section>
    );
};

MonsterBlock.propTypes = MonsterBlockPropTypes;

MonsterBlock.defaultProps = MonsterBlockDefaultProps;

export default MonsterBlock;