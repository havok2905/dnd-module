import { ICreature } from "../../interfaces/i-creature";

export const DEMON_LIZARD: ICreature = {
    ac: 15,
    actions: [
        {
            title: "Claws",
            description:
                "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 3d6 slashing damage"
        },
        {
            title: "Leap",
            description:
                "Range 60ft. +3 to hit. The lizard leaps at the target. The target must make a DC15 STR saving throw. On a failure, the target is knocked prone and takes 1d4 bludgeoning damage."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "2",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Necrotic"],
    damageWeaknesses: ["Radiant"],
    description:
        "This lizard has rotting, mottled skin, dripping over a skeletal body. As it walks, the occasional patch of scales drift to the floor.",
    features: [],
    hp: 65,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 60ft.", "Passive Perception: 10"],
    size: "Medium",
    skills: [],
    speed: "60 ft.",
    stats: {
        str: 10,
        dex: 17,
        con: 10,
        int: 3,
        wis: 8,
        cha: 10
    },
    type: "Undead"
};
