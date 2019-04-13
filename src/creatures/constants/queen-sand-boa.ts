import { ICreature } from "../../interfaces/i-creature";

export const QUEEN_SAND_BOA: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Bite",
            description: "+3 to hit. Player takes 3d8 piercing damage"
        },
        {
            title: "Trip",
            description:
                "Player makes a DC12 DEX saving throw. On failure, the target falls prone."
        },
        {
            title: "Constrict",
            description:
                "While grappled, the target makes a DC10 STR saving throw. On a fail, the player takes 4d12 bludgeoning damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "3",
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
    hp: 101,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception: 17"],
    size: "Medium",
    skills: [],
    speed: "50 ft.",
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
