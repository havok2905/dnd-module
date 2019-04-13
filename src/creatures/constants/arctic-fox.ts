import { ICreature } from "../../interfaces/i-creature";

export const ARCTIC_FOX: ICreature = {
    ac: 12,
    actions: [
        {
            title: "Bite",
            description:
                "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "0",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Cold"],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Keen Hearing and Smell",
            description:
                "The fox has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
            title: "Snow Camouflage",
            description:
                "The fox has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
        }
    ],
    hp: 3,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 60ft.", "Passive Perception: 13"],
    size: "Small",
    skills: ["Perception +3", "Stealth +4"],
    speed: "40 ft.",
    stats: {
        str: 8,
        dex: 15,
        con: 11,
        int: 3,
        wis: 12,
        cha: 6
    },
    type: "Beast"
};
