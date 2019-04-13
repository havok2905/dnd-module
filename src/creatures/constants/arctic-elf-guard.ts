import { ICreature } from "../../interfaces/i-creature";

export const ARCTIC_ELF_GUARD: ICreature = {
    ac: 16,
    actions: [
        {
            title: "Spear",
            description:
                "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d8 + 1) piercing damage. two handed"
        },
        {
            title: "Spear",
            description:
                "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d6 + 1) piercing damage."
        },
        {
            title: "Spear",
            description:
                "Ranged Weapon Attack: +3 to hit, reach 20/60 ft., one target. Hit: (1d6 + 1) piercing damage."
        }
    ],
    alignment: "Lawful Good",
    challenge: "1/8",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Cold"],
    damageWeaknesses: ["Fire"],
    description: "",
    features: [],
    hp: 11,
    inventory: ["3 Spears"],
    languages: ["Common", "Elvish"],
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
    type: "Wood Elf"
};
