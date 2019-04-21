import { IAbilities } from "./i-abilities";
import { ICharacterDescription } from "./i-character-description";
import { IClass } from "./i-class";
import { IGenericItem } from "./i-generic-item";
import { IHpBlock } from "./i-hp-block";
import { IPassiveSkill } from "./i-passive-skill";
import { ISpellCollection } from "./i-spell-collection";
import { ISpellSlot } from "./i-spell-slot";
import { IStats } from "./i-stats";

export interface ICharacter {
    ac: number;
    armorProficiencies: string[];
    abilities: IAbilities;
    actions: IGenericItem[];
    background: string;
    bonusActions: IGenericItem[];
    classes: IClass[];
    description: ICharacterDescription;
    hp: IHpBlock;
    image?: string;
    initiative: number;
    features: IGenericItem[];
    languages: string[];
    passivePerception: IPassiveSkill;
    passiveInsight: IPassiveSkill;
    passiveInvestigation: IPassiveSkill;
    proficiencyBonus: number;
    race: string;
    reactions: IGenericItem[];
    savingThrows: IStats;
    senses: IGenericItem[];
    speed: IGenericItem[];
    spells: ISpellCollection[];
    spellSlots: ISpellSlot[];
    stats: IStats;
    toolProficiencies: string[];
    weaponProficiencies: string[];
}
