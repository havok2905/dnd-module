import * as React from "react";
import { ICharacter } from "../../interfaces/i-character";
import { ISpellSlot } from "../../interfaces/i-spell-slot";
import { IGenericItem } from "../../interfaces/i-generic-item";
import { IClass } from "../../interfaces/i-class";
import { IProficiencyInfo } from "../../interfaces/i-proficiency-info";
import { ISpellCollection } from "../../interfaces/i-spell-collection";

export const CharacterSheet = ({
    armorProficiencies,
    abilities,
    actions,
    background,
    bonusActions,
    classes,
    description,
    hp,
    features,
    languages,
    passiveInsight,
    passiveInvestigation,
    passivePerception,
    proficiencyBonus,
    race,
    reactions,
    savingThrows,
    senses,
    speed,
    spells,
    spellSlots,
    stats,
    toolProficiencies,
    weaponProficiencies
}: ICharacter) => {
    const getProficiencyString = (
        proficiencyInfo: IProficiencyInfo
    ): string => {
        if (proficiencyInfo.hasExpertise) {
            return "E";
        }

        if (proficiencyInfo.hasProficiency) {
            return "P";
        }

        if (proficiencyInfo.hasOther) {
            return "H";
        }

        return "/";
    };

    const getCharacterLevel = () => {
        return (
            <p>
                <strong>
                    {classes
                        .map((item: IClass) => {
                            return `${item.name} ${item.level}`;
                        })
                        .join(" / ")}
                </strong>
            </p>
        );
    };

    const getCharacterTraitList = (collection: string[]) => {
        return (
            <ul>
                {collection.map((item: string, index: number) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        );
    };

    const getGenericItemsMarkup = (collection: IGenericItem[]) => {
        return collection.map((item: IGenericItem, index: number) => {
            return (
                <p key={index}>
                    <strong>{item.title}: </strong>
                    {item.description}
                </p>
            );
        });
    };

    const getSpells = () => {
        return spells.map((spellCollection: ISpellCollection) => {
            return (
                <React.Fragment>
                    <p>
                        <strong>Level: {spellCollection.level}</strong>
                    </p>
                    <ul>
                        {spellCollection.list.map(
                            (item: string, index: number) => {
                                return <li key={index}>{item}</li>;
                            }
                        )}
                    </ul>
                </React.Fragment>
            );
        });
    };

    const hasSpellSlots = () => {
        if (spellSlots.length <= 0) {
            return false;
        }

        const count = spellSlots
            .map((slot: ISpellSlot) => {
                return slot.count;
            })
            .reduce(
                (a: number, b: number): number => {
                    return a + b;
                }
            );

        return count > 0;
    };

    const getSpellSlots = () => {
        return (
            hasSpellSlots() && (
                <ul>
                    {spellSlots
                        .filter((item: ISpellSlot) => {
                            return item.count > 0;
                        })
                        .map((item: ISpellSlot, index: number) => {
                            return (
                                <li key={index}>
                                    <strong>Level {item.level}: </strong>
                                    {item.count}
                                </li>
                            );
                        })}
                </ul>
            )
        );
    };

    const getSkillRow = (key: string) => {
        return (
            <tr>
                <td>{getProficiencyString(abilities[key].proficiencyInfo)}</td>
                <td>{abilities[key].type}</td>
                <td>{abilities[key].name}</td>
                <td>{abilities[key].modifier}</td>
            </tr>
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
            {getCharacterTraitList(armorProficiencies)}
            <h3>Weapons</h3>
            {getCharacterTraitList(weaponProficiencies)}
            <h3>Tools</h3>
            {getCharacterTraitList(toolProficiencies)}
            <h3>Languages</h3>
            {getCharacterTraitList(languages)}
            <h2>Speed</h2>
            {getGenericItemsMarkup(speed)}
            <h2>Senses</h2>
            <p>
                <strong>
                    {passivePerception.name} ({passivePerception.type}):{" "}
                </strong>
                {passivePerception.value}
            </p>
            <p>
                <strong>
                    {passiveInsight.name} ({passiveInsight.type}):{" "}
                </strong>
                {passiveInsight.value}
            </p>
            <p>
                <strong>
                    {passiveInvestigation.name} ({passiveInvestigation.type}):{" "}
                </strong>
                {passiveInvestigation.value}
            </p>
            {getGenericItemsMarkup(senses)}
            <h2>Stats</h2>
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
                        <td>{stats.str.score}</td>
                        <td>{stats.dex.score}</td>
                        <td>{stats.con.score}</td>
                        <td>{stats.int.score}</td>
                        <td>{stats.wis.score}</td>
                        <td>{stats.cha.score}</td>
                    </tr>
                    <tr>
                        <td>{stats.str.modifier}</td>
                        <td>{stats.dex.modifier}</td>
                        <td>{stats.con.modifier}</td>
                        <td>{stats.int.modifier}</td>
                        <td>{stats.wis.modifier}</td>
                        <td>{stats.cha.modifier}</td>
                    </tr>
                </tbody>
            </table>
            <h2>Saving Throws</h2>
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
                        <td>{savingThrows.str.modifier}</td>
                        <td>{savingThrows.dex.modifier}</td>
                        <td>{savingThrows.con.modifier}</td>
                        <td>{savingThrows.int.modifier}</td>
                        <td>{savingThrows.wis.modifier}</td>
                        <td>{savingThrows.cha.modifier}</td>
                    </tr>
                </tbody>
            </table>
            <h2>Abilities</h2>
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
                    {getSkillRow("acrobatics")}
                    {getSkillRow("animalHandling")}
                    {getSkillRow("arcana")}
                    {getSkillRow("athletics")}
                    {getSkillRow("deception")}
                    {getSkillRow("history")}
                    {getSkillRow("insight")}
                    {getSkillRow("intimidation")}
                    {getSkillRow("investigation")}
                    {getSkillRow("medicine")}
                    {getSkillRow("nature")}
                    {getSkillRow("perception")}
                    {getSkillRow("performance")}
                    {getSkillRow("persuasion")}
                    {getSkillRow("religion")}
                    {getSkillRow("slightOfHand")}
                    {getSkillRow("stealth")}
                    {getSkillRow("survival")}
                </tbody>
            </table>
            <h2>Actions</h2>
            {getGenericItemsMarkup(actions)}
            <h2>Bonus Actions</h2>
            {getGenericItemsMarkup(bonusActions)}
            <h2>Reactions</h2>
            {getGenericItemsMarkup(reactions)}
            <h2>Features</h2>
            {getGenericItemsMarkup(features)}
            <h2>Spells</h2>
            <h3>Spell Slots</h3>
            {getSpellSlots()}
            <h3>List</h3>
            {getSpells()}
            <h2>Description</h2>
            <h3>Personality Traits</h3>
            {getCharacterTraitList(description.personalityTraits)}
            <h3>Ideals</h3>
            {getCharacterTraitList(description.ideals)}
            <h3>Bonds</h3>
            {getCharacterTraitList(description.bonds)}
            <h3>Flaws</h3>
            {getCharacterTraitList(description.flaws)}
            <h3>Alies and Organizations</h3>
            <p>{description.notes}</p>
            <h3>Appearance</h3>
            <p>{description.appearance}</p>
            <h3>Notes</h3>
            <p>{description.notes}</p>
        </article>
    );
};
