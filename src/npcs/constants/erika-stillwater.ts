import { ICreature } from "../../interfaces/i-creature";

export const ERIKA_STILLWATER: ICreature = {
    ac: 18,
    actions: [
        {
            title: "Multiattack",
            description: "Can make two short sword attacks"
        },
        {
            title: "Tiny Bomb(5)",
            description: "+5 to hit. Range 20/60ft. 1d12+2 fire damage."
        },
        {
            title: "Short Sword",
            description: "+7 to hit. Range 5ft. 1d10+7 slashing damage."
        }
    ],
    alignment: "Lawful Good",
    challenge: "7",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description:
        "Short, round face faced, young woman with green eyes and shoulder length brown hair. She always wears a brown coat with the outline of a ruby stitched into the left side.",
    features: [
        {
            title: "High Jump",
            description:
                "Erika can use her prosthetic leg to jump 60ft in the air. Upon landing she must make a DC15 DEX saving throw. On failure, she takes fall damage for the jump."
        }
    ],
    hp: 70,
    languages: ["Common", "Dwarvish"],
    reactions: [],
    savingThrows: [],
    senses: [],
    size: "Medium",
    skills: ["Acrobatics +12", "Athletics +12", "Slight of Hand +12"],
    speed: "40 ft.",
    stats: {
        str: 9,
        dex: 22,
        con: 12,
        int: 14,
        wis: 15,
        cha: 18
    },
    type: "Human"
};
