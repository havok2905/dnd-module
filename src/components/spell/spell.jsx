import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./spell-card.scss";

const spellPropTypes = {
    name: PropTypes.string.isRequired,
    rulesText: PropTypes.string.isRequired,
    higherLevelsText: PropTypes.string,
    level: PropTypes.number.isRequired,
    school: PropTypes.oneOf([
        "Abjuration",
        "Conjuration",
        "Divination",
        "Enchantment",
        "Evocation",
        "Illusion",
        "Necromancy",
        "Transmutation"
    ]).isRequired,
    ritual: PropTypes.bool,
    castTime: PropTypes.string.isRequired,
    range: PropTypes.string.isRequired,
    components: PropTypes.arrayOf(PropTypes.oneOf(["V", "S", "M"])).isRequired,
    material: PropTypes.arrayOf(PropTypes.string),
    concentration: PropTypes.bool,
    duration: PropTypes.string.isRequired,
    casters: PropTypes.arrayOf(PropTypes.string).isRequired
};

const spellDefaultProps = {
    ritual: false,
    concentration: false,
    material: []
};

const Spell = ({
    casters,
    castTime,
    components,
    concentration,
    duration,
    higherLevelsText,
    level,
    material,
    name,
    range,
    ritual,
    rulesText,
    school
}) => {
    const levelText = () => {
        if (level === 0) {
            return "Cantrip";
        }

        return `Level ${level}`;
    };

    const castersText = () => {
        return casters.join(", ");
    };

    const componentsText = () => {
        return components.join(", ");
    };

    const concentrationText = () => {
        const yesNo = concentration ? "" : "No";
        return `${yesNo} Concentration`;
    };

    const materials = () => {
        if (!material || material.length <= 0) {
            return;
        }

        return (
            <Fragment>
                <p>
                    <strong>Material Components</strong>
                </p>
                <ul
                    data-qa-target="materials"
                    className="spell-card__material-components"
                >
                    {material.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </Fragment>
        );
    };

    const ritualText = () => {
        const yesNo = ritual ? "" : "No";
        return `${yesNo} Ritual`;
    };

    return (
        <section className="spell-card">
            <h1>{name}</h1>
            <div className="spell-card__subtext-block">
                <p data-qa-target="level-school">
                    <strong>
                        {school}, {levelText()}
                    </strong>
                </p>
                <p data-qa-target="casters">{castersText()}</p>
            </div>
            <p>{rulesText}</p>
            <p>{higherLevelsText}</p>
            <ul className="spell-card__attributes">
                <li>
                    <i>alarm</i>
                    <span>{castTime}</span>
                </li>
                <li>
                    <i>straighten</i>
                    <span>{range}</span>
                </li>
                <li>
                    <i>timer</i>
                    <span>{duration}</span>
                </li>
                <li>
                    <i>search</i>
                    <span data-qa-target="concentration">
                        {concentrationText()}
                    </span>
                </li>
                <li>
                    <i>shopping_basket</i>
                    <span data-qa-target="components">{componentsText()}</span>
                </li>
                <li>
                    <i>brightness_high</i>
                    <span data-qa-target="ritual">{ritualText()}</span>
                </li>
            </ul>
            {materials()}
        </section>
    );
};

Spell.propTypes = spellPropTypes;

Spell.defaultProps = spellDefaultProps;

export { Spell };
