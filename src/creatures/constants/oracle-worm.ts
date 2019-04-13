import { ICreature } from "../../interfaces/i-creature";

export const ORACLE_WORM: ICreature = {
    ac: 18,
    actions: [
        {
            title: "Consume",
            description:
                "+12 to hit. Range: All. The target is swallowed by the worm and will take 1d12 acid damage per turn until it escapes."
        }
    ],
    alignment: "Unaligned",
    challenge: "25",
    conditionImmunities: ["Fear", "Charmed"],
    damageImmunities: ["Non magical weapons"],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Non Violent",
            description: "This creature will only attack when first attacked"
        },
        {
            title: "All knowing",
            description:
                "This creature knows all information the DM currently knows"
        }
    ],
    hp: 625,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 30ft.", "Passive Perception 5"],
    size: "Gargantuan",
    skills: [],
    speed: "Flying 120 ft.",
    stats: {
        str: 30,
        dex: 30,
        con: 30,
        int: 30,
        wis: 30,
        cha: 30
    },
    type: "Monstrosity"
};
