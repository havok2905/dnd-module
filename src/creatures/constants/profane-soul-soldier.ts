import { ICreature } from "../../interfaces/i-creature";

export const PROFANE_SOUL_SOLDIER: ICreature = {
    ac: 17,
    actions: [
        {
            title: "Multiattack",
            description:
                "The blood hunter can either make two attacks with its rite weapon or cast a cantrip and make one weapon attack."
        },
        {
            title: "Dagger",
            description:
                "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
        },
        {
            title: "Rite Longbow",
            description:
                "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) fire damage. If the damage from this attack reduces a creature to 0 hit points, the blood hunter regains an expended spell slot."
        },
        {
            title: "Diabolic Channel",
            description:
                "The blood hunter makes one attack with its rite longbow against a creature. If the attack hits, the blood hunter can cast one spell on the target, regardless of the regular rules for range, affecting only that target. If the spell requires an attack roll, it automatically hits. If the spell requires a saving throw, the creature has disadvantage on the first saving throw made against the spell."
        }
    ],
    alignment: "Neutral Good",
    challenge: "5",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Fire"],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Hunter's Bane",
            description:
                "The blood hunter has advantage on Wisdom (Survival) checks to track fey, fiends, and undead, and on Intelligence checks to recall information about them."
        },
        {
            title: "Rite Weapon",
            description:
                "The blood hunter's rite weapon is its longbow. Its attacks with its rite weapon are magical and deal an additional 4 (1d8) fire damage (included in the attack)."
        },
        {
            title: "Spellcasting",
            description:
                "The blood hunter is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells, and can cast them using its rite weapon as its spellcasting focus: Cantrips (at will): blade ward, chill touch, mage hand 1st-3rd level (2 3rd-level slots): charm person, crown of madness, earthbind, fear, hold person, ray of enfeeblement"
        }
    ],
    hp: 112,
    inventory: ["1 Dagger", "1 Longbow", "1 Half Plate Armor"],
    languages: ["Common", "Infernal"],
    reactions: [],
    savingThrows: [],
    senses: ["passive Perception 12"],
    size: "Medium",
    skills: ["Insight +5", "Intimidation +3", "Survival +5"],
    speed: "30 ft.",
    stats: {
        str: 12,
        dex: 16,
        con: 16,
        int: 12,
        wis: 15,
        cha: 11
    },
    type: "Humanoid"
};
