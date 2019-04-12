import { ICreature } from "../../interfaces/i-creature";

export const BARRY: ICreature = {
    ac: 15,
    actions: [
        {
            title: "Multiattack",
            description: "Can make two rapier attacks."
        },
        {
            title: "Rapier +1",
            description:
                "Magic Melee Weapon, Range 5ft. +7 to hit. 2d8+5 piercing damage."
        }
    ],
    alignment: "Lawful Evil",
    challenge: "4",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description:
        "Barry, together with his wife Sloan, moved between many criminal organizations. He rose up through the ranks of the Blood Pythons bandit gang and eventually ended up an officer of logistics with the Ravens Thieve's Guild.",
    features: [],
    hp: 70,
    languages: ["Common", "Dwarvish"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 10"],
    size: "Medium",
    skills: ["History +10", "Survival +4"],
    speed: "30 ft.",
    stats: {
        str: 15,
        dex: 17,
        con: 13,
        int: 17,
        wis: 10,
        cha: 10
    },
    type: "Human"
};
