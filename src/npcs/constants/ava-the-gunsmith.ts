import { ICreature } from "../../interfaces/i-creature";

export const AVA_THE_GUNSMITH: ICreature = {
    ac: 17,
    actions: [
        {
            title: "Rifle",
            description:
                "+6 to hit. Two Handed. Range 80/240ft. 2d10+4 piercing damage"
        }
    ],
    alignment: "Lawful Good",
    challenge: "2",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "Friendly, ready to help anyone regardless of the situation.",
    features: [],
    hp: 35,
    languages: ["Common"],
    reactions: [],
    savingThrows: [],
    senses: [],
    size: "Medium",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 10,
        dex: 17,
        con: 10,
        int: 13,
        wis: 10,
        cha: 12
    },
    type: "Human"
};
