import { ICreature } from "../../interfaces/i-creature";

export const POLICE_OFFICER: ICreature = {
    ac: 15,
    actions: [
        {
            title: "Pistol",
            description:
                "Ranged Weapon Attack: +3 to hit, 30/90ft., one target. Hit: (1d10 + 1) piercing damage"
        },
        {
            title: "Taser",
            description:
                "Melee Weapon Attack: +3 to hit. Reach 5ft., one target. Hit (1d4+1) lightning damage. The target must make a DC15 CON saving throw. On failure, they are paralyzed. Each turn the target may make another CON saving throw to break out of paralysis."
        }
    ],
    alignment: "Lawful Good",
    challenge: "1/8",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Bludgeoning, Slashing, and Piercing"],
    damageWeaknesses: [],
    description: "",
    features: [],
    hp: 11,
    inventory: [
        "1 Taser",
        "1 Pistol",
        "1 Pair Handcuffs",
        "1 Pair of Car Keys"
    ],
    languages: ["Common"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 12"],
    size: "Medium",
    skills: ["Perception +2"],
    speed: "30 ft.",
    stats: {
        str: 13,
        dex: 12,
        con: 12,
        int: 10,
        wis: 11,
        cha: 10
    },
    type: "Humanoid"
};
