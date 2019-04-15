import { IGenericItem } from "./i-generic-item";
import { IStatBlock } from "./i-stat-block";

export interface ICreature {
    ac: number;
    actions: IGenericItem[];
    alignment: string;
    challenge: string;
    conditionImmunities: string[];
    damageImmunities: string[];
    damageResistances: string[];
    damageWeaknesses: string[];
    description?: string;
    features: IGenericItem[];
    hp: number;
    image?: string;
    inventory?: string[];
    languages: string[];
    name?: string;
    reactions: IGenericItem[];
    savingThrows: string[];
    senses: string[];
    size: string;
    skills: string[];
    speed: string;
    stats: IStatBlock;
    type: string;
}
