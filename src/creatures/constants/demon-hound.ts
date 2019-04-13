import { ICreature } from "../../interfaces/i-creature";

export const DEMON_HOUND: ICreature = {
    ac: 12,
    actions: [
        {
            title: "Bite",
            description:
                "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 3d6 piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
        },
        {
            title: "Screech",
            description:
                "Any creature within a 15ft. radius of this creature must make a DC13 CON saving throw. On failure, the target takes 2d6 thunder damage and are stunned for one turn."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "2",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Necrotic"],
    damageWeaknesses: ["Radiant"],
    description:
        "This hound has rotting, mottled skin, dripping over a skeletal body. Razor sharp teeth can be seen peaking out through patches of missing flesh.",
    features: [],
    hp: 75,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 60ft.", "Passive Perception: 10"],
    size: "Medium",
    skills: [],
    speed: "40 ft.",
    stats: {
        str: 12,
        dex: 15,
        con: 15,
        int: 4,
        wis: 10,
        cha: 8
    },
    type: "Undead"
};
