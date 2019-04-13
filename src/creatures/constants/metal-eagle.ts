import { ICreature } from "../../interfaces/i-creature";

export const METAL_EAGLE: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Multiattack",
            description:
                "The eagle makes two attacks: one with its beak and one with its talons."
        },
        {
            title: "Beak",
            description:
                "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d6 + 3) piercing damage."
        },
        {
            title: "Talons",
            description:
                "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (2d6 + 3) slashing damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "1",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description:
        "This large metal eagle is made of steel plates, sparkling clean, and without a scratch on it",
    features: [
        {
            title: "Keen Sight",
            description:
                "The construct has advantage on Wisdom (Perception) checks that rely on sight."
        }
    ],
    hp: 26,
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["passive Perception 14"],
    size: "Large",
    skills: ["Perception +4"],
    speed: " 10 ft., fly 80 ft.",
    stats: {
        str: 16,
        dex: 17,
        con: 13,
        int: 8,
        wis: 14,
        cha: 10
    },
    type: "Construct"
};
