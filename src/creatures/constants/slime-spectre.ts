import { ICreature } from "../../interfaces/i-creature";

export const SLIME_SPECTRE: ICreature = {
    ac: 14,
    actions: [
        {
            title: "Pistol",
            description:
                "Ranged Weapon Attack: +3 to hit, 30/90ft., one target. Hit: (1d10 + 1) piercing damage"
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "1/4",
    conditionImmunities: [
        "Charmed",
        "Exhaustion",
        "Frightened",
        "Grappled",
        "Paralyzed",
        "Petrified",
        "Poisoned",
        "Prone",
        "Restrained"
    ],
    damageImmunities: ["Cold", "Necrotic", "Poison"],
    damageResistances: [
        "Acid",
        "Fire",
        "Lightning",
        "Thunder",
        "Bludgeoning, Piercing, and Slashing From Nonmagical Attacks"
    ],
    damageWeaknesses: [],
    description: "A neon green, dripping, slimy spectre.",
    features: [
        {
            title: "Incorporeal Slime",
            description:
                "The Slime Spectre can move through other creatures and objects as if they were difficult terrain. It deals 5 (1d10) acid damage if it moves through another creature."
        },
        {
            title: "Possession (Recharge 6).",
            description:
                "One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies. The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
        }
    ],
    hp: 25,
    inventory: [],
    languages: ["Common"],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 60ft.", "Passive Perception 11"],
    size: "Medium",
    skills: ["Perception +2"],
    speed: "40 ft. flying",
    stats: {
        str: 7,
        dex: 13,
        con: 10,
        int: 10,
        wis: 12,
        cha: 17
    },
    type: "Undead"
};
