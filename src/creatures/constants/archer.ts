import { ICreature } from "../../interfaces/i-creature";

export const ARCHER: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Shortbow",
            description:
                "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
        }
    ],
    alignment: "Any Alignment",
    challenge: "1/4",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [],
    hp: 18,
    inventory: ["20 Arrows, 1 Shortbow"],
    languages: ["Common"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 15"],
    size: "Medium",
    skills: ["Perception +5"],
    speed: "30 ft.",
    stats: {
        str: 10,
        dex: 14,
        con: 10,
        int: 10,
        wis: 13,
        cha: 10
    },
    type: "Humanoid"
};
