import { ICreature } from "../../interfaces/i-creature";

export const EMBER_BAT: ICreature = {
    ac: 12,
    actions: [
        {
            title: "Ember",
            description:
                "Ranged Attack: +4 to hit, reach 15 ft., one target. Target takes 1d6+2 fire damage. Anything this attack hits, that is flammable, catches fire."
        }
    ],
    alignment: "Unaligned",
    challenge: "1/4",
    conditionImmunities: [],
    damageImmunities: ["Fire"],
    damageResistances: [],
    damageWeaknesses: ["Thunder"],
    description: "",
    features: [
        {
            title: "Glow",
            description:
                "This creature can emit a 20 foot radius warm light around itself."
        }
    ],
    hp: 12,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 120ft.", "Passive Perception: 13"],
    size: "Tiny",
    skills: [],
    speed: "Fly 30 ft.",
    stats: {
        str: 4,
        dex: 18,
        con: 13,
        int: 4,
        wis: 13,
        cha: 18
    },
    type: "Beast"
};
