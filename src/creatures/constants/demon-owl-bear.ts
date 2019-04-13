import { ICreature } from "../../interfaces/i-creature";

export const DEMON_OWLBEAR: ICreature = {
    ac: 15,
    actions: [
        {
            title: "Multiattack",
            description:
                "The owlbear makes two attacks: one with its beak and one with its claws."
        },
        {
            title: "Beak",
            description:
                "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: (2d10 + 5) piercing damage."
        },
        {
            title: "Claws",
            description:
                "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (3d8 + 5) slashing damage."
        },
        {
            title: "Slam",
            description:
                "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (5d10+5) bludgeoning damage. The owlbear is knocked prone as a result of this action."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "5",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Necrotic"],
    damageWeaknesses: ["Radiant"],
    description:
        "This owlbear has rotting, mottled skin, missing feathers, and no fur.",
    features: [
        {
            title: "Keen Sight and Smell.",
            description:
                "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell."
        }
    ],
    hp: 112,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 60ft.", "Passive Perception: 10"],
    size: "Large",
    skills: ["Perception +3"],
    speed: "40 ft.",
    stats: {
        str: 20,
        dex: 12,
        con: 17,
        int: 3,
        wis: 12,
        cha: 10
    },
    type: "Undead"
};
