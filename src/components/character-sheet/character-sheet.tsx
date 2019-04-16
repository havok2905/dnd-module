import * as React from "react";
import { ICharacter } from "../../interfaces/i-character";
import { ISpellSlot } from "../../interfaces/i-spell-slot";
import { IGenericItem } from "../../interfaces/i-generic-item";
import { IClass } from "../../interfaces/i-class";
import { IProficiencyInfo } from "../../interfaces/i-proficiency-info";
import { ISpellCollection } from "../../interfaces/i-spell-collection";

export const CharacterSheet = ({
    ac,
    armorProficiencies,
    abilities,
    actions,
    background,
    bonusActions,
    classes,
    description,
    hp,
    image,
    initiative,
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
        return spells.map(
            (spellCollection: ISpellCollection, index: number) => {
                return (
                    <div key={index}>
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
                    </div>
                );
            }
        );
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
            <div className="character-sheet__header">
                <div className="character-sheet__header-image">
                    <img src={image} />
                </div>
                <div className="character-sheet__header-content">
                    <h2>Character Name</h2>
                    {getCharacterLevel()}
                    <div>
                        <p className="character-sheet__chip">
                            <strong>Race: </strong>
                            {race}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Background: </strong>
                            {background}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Alignment: </strong>
                            {description.alignment}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Faith: </strong>
                            {description.faith}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Gender: </strong>
                            {description.gender}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Age: </strong>
                            {description.age}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Size: </strong>
                            {description.size}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Height: </strong>
                            {description.height}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Weight: </strong>
                            {description.weight}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Skin: </strong>
                            {description.eyes}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Eyes: </strong>
                            {description.eyes}
                        </p>
                        <p className="character-sheet__chip">
                            <strong>Hair: </strong>
                            {description.hair}
                        </p>
                    </div>
                    <h3>Stats</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Current Hp</th>
                                <th scope="col">Temp Hp</th>
                                <th scope="col">Max Hp</th>
                                <th scope="col">Prof</th>
                                <th scope="col">Init</th>
                                <th scope="col">AC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{hp.currentHp}</td>
                                <td>{hp.tempHp}</td>
                                <td>{hp.maxHp}</td>
                                <td>{proficiencyBonus}</td>
                                <td>{initiative}</td>
                                <td>{ac}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3>Proficiencies and Languages</h3>
            <div className="character-sheet__proficiencies">
                <div>
                    <h4>Armor</h4>
                    {getCharacterTraitList(armorProficiencies)}
                </div>
                <div>
                    <h4>Weapons</h4>
                    {getCharacterTraitList(weaponProficiencies)}
                </div>
                <div>
                    <h4>Tools</h4>
                    {getCharacterTraitList(toolProficiencies)}
                </div>
                <div>
                    <h4>Languages</h4>
                    {getCharacterTraitList(languages)}
                </div>
            </div>
            <h3>Speed</h3>
            {getGenericItemsMarkup(speed)}
            <h3>Senses</h3>
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
            <h3>Stats</h3>
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
            <h3>Saving Throws</h3>
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
            <h3>Abilities</h3>
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
            <h3>Actions</h3>
            {getGenericItemsMarkup(actions)}
            <h3>Bonus Actions</h3>
            {getGenericItemsMarkup(bonusActions)}
            <h3>Reactions</h3>
            {getGenericItemsMarkup(reactions)}
            <h3>Features</h3>
            {getGenericItemsMarkup(features)}
            <h3>Spells</h3>
            <h4>Spell Slots</h4>
            {getSpellSlots()}
            <h4>List</h4>
            {getSpells()}
            <h3>Description</h3>
            <h4>Personality Traits</h4>
            {getCharacterTraitList(description.personalityTraits)}
            <h4>Ideals</h4>
            {getCharacterTraitList(description.ideals)}
            <h4>Bonds</h4>
            {getCharacterTraitList(description.bonds)}
            <h4>Flaws</h4>
            {getCharacterTraitList(description.flaws)}
            <h4>Alies and Organizations</h4>
            <p>{description.notes}</p>
            <h4>Appearance</h4>
            <p>{description.appearance}</p>
            <h4>Notes</h4>
            <p>{description.notes}</p>
        </article>
    );
};
