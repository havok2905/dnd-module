import { ICreature } from "../../interfaces/i-creature";

export const METAL_GORILLA: ICreature = {
    ac: 15,
    actions: [
        {
            title: "Multiattack",
            description: "The Gorilla makes three fist attacks."
        },
        {
            title: "Hammer Fist",
            description:
                "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "3",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [],
    hp: 50,
    languages: ["Common"],
    reactions: [],
    savingThrows: [],
    senses: [],
    size: "Medium",
    skills: ["Acrobatics +2", "Perception +3"],
    speed: "30 ft.",
    stats: {
        str: 20,
        dex: 10,
        con: 16,
        int: 10,
        wis: 13,
        cha: 15
    },
    type: "Construct"
};
