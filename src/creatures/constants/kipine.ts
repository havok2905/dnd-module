import { ICreature } from "../../interfaces/i-creature";

export const KIPINE: ICreature = {
    ac: 15,
    actions: [
        {
            title: "Multiattack",
            description:
                "The kipine makes two attacks: one with it's antlers and twice with it's talons."
        },
        {
            title: "Antlers",
            description:
                "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
        },
        {
            title: "Talons",
            description:
                "Melee Weapon Attack: +6 to hit, range 5 ft., one target. Hit: 14 (2d8 + 4) slashing damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "4",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Keen Sight and Smell.",
            description:
                "The kipine has advantage on Wisdom (Perception) checks that rely on sight or smell."
        },
        {
            title: "Propelled Movement.",
            description:
                "The kipine can use it's bonus action to propel itself forward an additional 20 ft. in any direction."
        }
    ],
    hp: 0,
    inventory: [],
    languages: [],
    reactions: [
        {
            title: "Talons",
            description:
                "If a target moves out of the kipine's melee range without first Disengaging, the kipine can make one (1) Talon attack at the target for 2d8 + 4 slashing damage."
        },
        {
            title: "Shriek",
            description:
                "The kipine can use it's reaction to Shriek at a target leaving/passing through their melee range. The target must succeed on a DC 14 Constitution saving throw or be stunned until the end of their next turn."
        }
    ],
    savingThrows: ["STR +6", "DEX +5"],
    senses: ["Darkvision", "Passive Perception 14"],
    size: "Large",
    skills: ["Perception +4", "Stealth +5"],
    speed: "30 ft., 60ft fly",
    stats: {
        str: 18,
        dex: 17,
        con: 16,
        int: 4,
        wis: 16,
        cha: 8
    },
    type: "Monstrosity"
};
