import { ICreature } from "../../interfaces/i-creature";

export const HERO_OF_LEGEND: ICreature = {
    ac: 19,
    actions: [
        {
            title: "Multiattack",
            description: "Can make three attacks"
        },
        {
            title: "+3 Longsword",
            description: "+13 to hit: Melee. Range 5ft. 1d8+8 slashing damage"
        },
        {
            title: "Sword Beam",
            description:
                "+10 to hit: Ranged. Range 60ft. 3d8+4 lightning damage. This can only be used when at full health"
        },
        {
            title: "Fire Arrows",
            description:
                "+10 to hit: Ranged. Range 80/320. 1d6+7 piercing damage and 1d4 fire damage."
        },
        {
            title: "Spin Attack",
            description:
                "This action must be charged for 1 turn. When fired, this creature can use a Longsword attack on all spaces surrounding this creature for double damage. While charging, this creature cannot make any other actions or reactions."
        },
        {
            title: "Bomb",
            description:
                "(5 Charges): As an action, a character can light this bomb and throw it at a point up to 60 feet away. Each creature within 5 feet of that point must succeed on a DC 12 Dexterity saving throw or take 3d6 fire damage."
        },
        {
            title: "Legendary Boomerang",
            description:
                "+10 to hit: Ranged. Range 60/120. 1d4 bludgeoning damage. If the player is holding an item, they must make a DC15 DEX saving throw. On failure, the target's item is returned to this creature with the boomerang"
        },
        {
            title: "Hookshot",
            description:
                "+10 to hit. Ranged. Range 25/50 feet. When the target is a creature, they must succeed a DC15 CON saving throw or be stunned for one turn. If the target is inanimate and weighs more than this creature, they may move directly to that spot with no use of movement."
        }
    ],
    alignment: "Neutral Good",
    challenge: "20",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description:
        "This half elf is exceptionally old, with long white hair, a bushy beard, and a green tunic.",
    features: [
        {
            title: "Favored Terrain",
            description: "Grassland, Forest, Coast"
        }
    ],
    hp: 250,
    inventory: ["1 potion of Supreme Healing", "1 +3 Shield"],
    languages: ["Common", "Elvish"],
    reactions: [
        {
            title: "Holy Protection",
            description:
                "1 use per day: Can force a singular attack to miss, as this creatures is surrounded by a diamond of blue light."
        }
    ],
    savingThrows: [],
    senses: ["passive Perception 15"],
    size: "Medium",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 18,
        dex: 23,
        con: 18,
        int: 15,
        wis: 15,
        cha: 18
    },
    type: "Half Elf"
};
