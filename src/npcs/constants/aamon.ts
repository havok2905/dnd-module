import { ICreature } from "../../interfaces/i-creature";

export const AAMON: ICreature = {
    ac: 11,
    actions: [
        {
            title: "Quarter Staff",
            description:
                "Melee Weapon. 5ft Range. +3 to hit. 1d6 bludgeoning damage."
        },
        {
            title: "Firebolt",
            description:
                "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried. This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
        },
        {
            title: "Message",
            description:
                "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings."
        },
        {
            title: "Thaumaturgy",
            description:
                "You manifest a minor wonder, a sign of supernatural power, within range."
        },
        {
            title: "Darkness",
            description:
                "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it."
        },
        {
            title: "Hellish Rebuke",
            description:
                "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one."
        },
        {
            title: "Fireball",
            description:
                "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one."
        },
        {
            title: "Lightning Bolt",
            description:
                "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one."
        },
        {
            title: "Tiny Hut",
            description:
                "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area. Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside."
        },
        {
            title: "Cone of Cold",
            description:
                "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws."
        }
    ],
    alignment: "Chaotic Good",
    challenge: "10",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Fire"],
    damageWeaknesses: [],
    description: "Lazy, but has a good heart. He wears a big green hat.",
    features: [
        {
            title: "Spell Sculpt",
            description:
                "When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell’s level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
        }
    ],
    hp: 65,
    languages: ["Common", "Infernal", "Dwarvish"],
    reactions: [],
    savingThrows: ["INT +9", "WIS +7"],
    senses: ["Darkvision 60ft.", "Passive Perception 17"],
    size: "Medium",
    skills: ["Arcana +9", "Investigation +9", "Persuasion +9"],
    speed: "30 ft.",
    stats: {
        str: 8,
        dex: 10,
        con: 10,
        int: 20,
        wis: 16,
        cha: 19
    },
    type: "Tiefling"
};
