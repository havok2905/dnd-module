export default {
    ac: 18,
    actions: [
        {
            title: "Multiattack",
            description:
                "The blood hunter can either make three attacks with its rite weapon or cast a cantrip and make one weapon attack."
        },
        {
            title: "Rite Greatsword",
            description:
                "Melee Weapon Attack: +9 to hit, range 5 ft., one target. 2d6+5 slashing damage plus 1d8 fire damage. If the damage from this attack reduces a creature to 0 hit points, the blood hunter regains an expended spell slot."
        },
        {
            title: "Diabolic Channel",
            description:
                "The blood hunter makes one attack with its rite greatsword against a creature. If the attack hits, the blood hunter can cast one spell on the target, regardless of the regular rules for range, affecting only that target. If the spell requires an attack roll, it automatically hits. If the spell requires a saving throw, the creature has disadvantage on the first saving throw made against the spell."
        }
    ],
    alignment: "Neutral Good",
    challenge: "7",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Fire"],
    damageWeaknesses: [],
    description:
        "Standing eight feet tall, this hulking beast of a person is covered in burns, radiating heat as it walks.",
    features: [
        {
            title: "Hunter's Bane",
            description:
                "The blood hunter has advantage on Wisdom (Survival) checks to track fey, fiends, and undead, and on Intelligence checks to recall information about them."
        },
        {
            title: "Rite Weapon",
            description:
                "The blood hunter's rite weapon is its greatsword. Its attacks with its rite weapon are magical and deal an additional 4 (1d8) fire damage (included in the attack)."
        },
        {
            title: "Spellcasting",
            description:
                "The blood hunter is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells, and can cast them using its rite weapon as its spellcasting focus: Cantrips (at will): blade ward, chill touch, mage hand 1st-3rd level (2 3rd-level slots): charm person, crown of madness, earthbind, fear, hold person, ray of enfeeblement"
        }
    ],
    hp: 200,
    inventory: ["1 Greatsword", "1 Half Plate Armor"],
    languages: ["Common", "Infernal"],
    reactions: [],
    savingThrows: [],
    senses: ["passive Perception 11"],
    size: "Large",
    skills: ["Insight +3", "Intimidation +5", "Survival +3"],
    speed: "30 ft.",
    stats: {
        str: 18,
        dex: 12,
        con: 19,
        int: 10,
        wis: 14,
        cha: 12
    },
    type: "Humanoid"
};
