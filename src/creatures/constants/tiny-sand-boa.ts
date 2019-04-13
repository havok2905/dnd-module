import { ICreature } from "../../interfaces/i-creature";

export const TINY_SAND_BOA: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Bite",
            description: "+3 to hit. Player takes 1d6 piercing damage"
        },
        {
            title: "Trip",
            description:
                "Player makes a DC12 DEX saving throw. On failure, the target falls prone."
        }
    ],
    alignment: "Unaligned",
    challenge: "1/8",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: ["Cold"],
    description: "",
    features: [
        {
            title: "Vibration Sense",
            description:
                "Gains advantage on perception checks to sense creatures walking through sand."
        },
        {
            title: "Bad Eye Sight",
            description:
                "Takes disadvantage on perception checks related to sight."
        }
    ],
    hp: 9,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception: 15"],
    size: "Tiny",
    skills: [],
    speed: "40 ft.",
    stats: {
        str: 7,
        dex: 15,
        con: 7,
        int: 16,
        wis: 16,
        cha: 7
    },
    type: "Beast"
};
