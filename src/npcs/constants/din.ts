import { ICreature } from "../../interfaces/i-creature";

export const DIN: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Rapier",
            description:
                "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
        }
    ],
    alignment: "Chaotic Neutral",
    challenge: "5",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "Thin, short, long red hair, and a has a love for dance.",
    features: [
        {
            title: "Majesty",
            description:
                "The first time a creature attacks the bard on a turn, the attacker must make a DC 13 Charisma saving throw. On a failed save, it can't attack the bard on this turn, and it must choose a new target for the attack or the attack is wasted."
        },
        {
            title: "Charm Person",
            description:
                "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."
        },
        {
            title: "Invisibility",
            description:
                "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target’s person. The spell ends for a target that attacks or casts a spell."
        },
        {
            title: "Hypnotic Pattern",
            description:
                "You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0. The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor."
        }
    ],
    hp: 44,
    languages: ["Common", "Elvish"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 7", "Darkvision 60ft."],
    size: "Medium",
    skills: ["acrobatics +10"],
    speed: "30 ft.",
    stats: {
        str: 11,
        dex: 14,
        con: 12,
        int: 14,
        wis: 7,
        cha: 14
    },
    type: "Elf"
};
