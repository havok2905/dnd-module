import { ICreature } from "../../interfaces/i-creature";

export const RESISTANCE_FIGHTER: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Multiattack",
            description:
                "The fighter makes two melee attacks, only one of which can be with its shield bash."
        },
        {
            title: "Battleaxe",
            description:
                "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands to make a melee attack."
        },
        {
            title: "Shield Bash",
            description:
                "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage. If the target Large or smaller, it must succeed on a DC 12 Strength saving throw or be knocked prone."
        }
    ],
    alignment: "Lawful Good",
    challenge: "1",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "",
            description: ""
        }
    ],
    hp: 30,
    inventory: [],
    languages: [],
    reactions: [
        {
            title: "Parry",
            description:
                "Parry. The dwarf adds 2 to its AC against one melee attack that would hit it. To do so, the dwarf must see the attacker and be wielding a melee weapon."
        }
    ],
    savingThrows: [],
    senses: ["Passive Perception 10"],
    size: "Medium",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 14,
        dex: 11,
        con: 14,
        int: 10,
        wis: 11,
        cha: 10
    },
    type: "Humanoid"
};
