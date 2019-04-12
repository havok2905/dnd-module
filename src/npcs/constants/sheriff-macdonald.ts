import { ICreature } from "../../interfaces/i-creature";

export const SHERIFF_MACDONALD: ICreature = {
    ac: 10,
    actions: [
        {
            title: "Pistol",
            description: "+0 to hit. Range 30/90ft. 1d10 piercing."
        }
    ],
    alignment: "Lawful Good",
    challenge: "0",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "Lazy, but has a good heart. He wears a big green hat.",
    features: [],
    hp: 10,
    languages: ["Common"],
    reactions: [],
    savingThrows: [],
    senses: [],
    size: "Medium",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    },
    type: "Human"
};
