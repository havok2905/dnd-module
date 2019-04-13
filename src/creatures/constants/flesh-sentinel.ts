import { ICreature } from "../../interfaces/i-creature";

export const FLESH_SENTINEL: ICreature = {
    ac: 10,
    actions: [
        {
            title: "Multiattack",
            description: "The golem makes two slam attacks."
        },
        {
            title: "Slam",
            description:
                "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (2d8 + 4) bludgeoning damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "7",
    conditionImmunities: [
        "Charmed",
        "Exhaustion",
        "Frightened",
        "Paralyzed",
        "Petrified",
        "Poisoned"
    ],
    damageImmunities: [
        "Lightning",
        "Poison",
        "Bludgeoning, Piercing, And Slashing From Nonmagical Weapons That Aren't Adamantine"
    ],
    damageResistances: [],
    damageWeaknesses: ["radiant"],
    description: "",
    features: [
        {
            title: "Berserk",
            description:
                "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points."
        },
        {
            title: "Immutable Form.",
            description:
                "The golem is immune to any spell or effect that would alter its form."
        },
        {
            title: "Lightning Absorption",
            description:
                "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt."
        },
        {
            title: "Magical Resistance",
            description:
                "The golem has advantage on saving throws against spells and other magical effects."
        }
    ],
    hp: 120,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 60ft.", "Passive Perception 10"],
    size: "Large",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 22,
        dex: 9,
        con: 20,
        int: 6,
        wis: 10,
        cha: 5
    },
    type: "Construct"
};
