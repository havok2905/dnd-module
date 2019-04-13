import { ICreature } from "../../interfaces/i-creature";

export const HIGH_PRIEST_OF_ENKIEM: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Mace",
            description:
                "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: (1d6) bludgeoning damage."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "2",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["necrotic"],
    damageWeaknesses: ["radiant"],
    description: "",
    features: [
        {
            title: "Spellcasting",
            description:
                "he priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared: Cantrips (at will): light, sacred flame, thaumaturgy. 1st level (4 slots): cure wounds, guiding bolt, sanctuary. 2nd level (3 slots): lesser restoration, spiritual weapon. 3rd level (2 slots): dispel magic, spirit guardians"
        }
    ],
    hp: 27,
    inventory: [],
    languages: ["Common", "Infernal"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 13"],
    size: "Medium",
    skills: ["Persuasion +7", "Religion +4"],
    speed: "30 ft.",
    stats: {
        str: 10,
        dex: 10,
        con: 12,
        int: 13,
        wis: 16,
        cha: 13
    },
    type: "Humanoid"
};
