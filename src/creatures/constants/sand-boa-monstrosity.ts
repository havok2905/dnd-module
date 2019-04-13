import { ICreature } from "../../interfaces/i-creature";

export const SAND_BOA_MONSTROSITY: ICreature = {
    ac: 18,
    actions: [
        {
            title: "Multiattack",
            description: "Boa can take two actions"
        },
        {
            title: "Slam",
            description: "+9 to hit. Player takes 10d8+9 bludgeoning damage"
        },
        {
            title: "Constrict",
            description:
                "While grappled, the target makes a DC19 STR saving throw. On a fail, the player takes 10d12+9 bludgeoning damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "3",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: ["Cold"],
    description:
        "The boas all congregate around the queen, coiling around her as they form an gargantuan snake like monstrosity.",
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
        },
        {
            title: "Split",
            description:
                "When the boa takes damage from slashing or lightning damage, it splits into 2 boas of half health each. The new boas are one size smaller than the previous boa."
        }
    ],
    hp: 310,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception: 17"],
    size: "Gargantuan",
    skills: [],
    speed: "50 ft.",
    stats: {
        str: 28,
        dex: 10,
        con: 22,
        int: 16,
        wis: 16,
        cha: 10
    },
    type: "Beast"
};
