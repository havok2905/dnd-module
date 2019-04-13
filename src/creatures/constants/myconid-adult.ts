import { ICreature } from "../../interfaces/i-creature";

export const MYCONID_ADULT: ICreature = {
    ac: 12,
    actions: [
        {
            title: "Fist",
            description:
                "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) bludgeoning damage plus 5 (2d4) poison damage."
        },
        {
            title: "Pacifying Spores (3/Day)",
            description:
                "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 11 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
            title: "Rapport Spores",
            description:
                "A 20-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren’t undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
        }
    ],
    alignment: "Lawful Neutral",
    challenge: "1/2",
    conditionImmunities: ["poisoned", "charmed"],
    damageImmunities: ["poison", "necrotic"],
    damageResistances: ["bludgeoning from non magical weapons"],
    damageWeaknesses: ["fire", "cold"],
    description: "",
    features: [
        {
            title: "Distress Spores",
            description:
                "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
        },
        {
            title: "Sun Sickness",
            description:
                "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
        }
    ],
    hp: 22,
    languages: ["None"],
    reactions: [],
    savingThrows: [],
    senses: ["passive Perception 13", "darkvision 120 ft."],
    size: "Medium",
    skills: [],
    speed: "20 ft.",
    stats: {
        str: 10,
        dex: 10,
        con: 12,
        int: 10,
        wis: 13,
        cha: 7
    },
    type: "plant"
};
