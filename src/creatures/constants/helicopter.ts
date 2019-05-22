import { ICreature } from "../../interfaces/i-creature";

export const HELICOPTER: ICreature = {
    ac: 16,
    actions: [
        {
            title: "Multiattack",
            description: "Makes 2 Gatling Gun attacks"
        },
        {
            title: "Gatling Gun",
            description:
                "Ranged Attack: 3000 ft. +6 to hit. 3d12+6 piercing damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "7",
    conditionImmunities: [
        "Blinded",
        "Charm",
        "Deafened",
        "Exhaustion",
        "Fatigued",
        "Frightened",
        "Poisoned",
        "Unconscious"
    ],
    damageImmunities: ["Poison", "Necrotic"],
    damageResistances: ["Acid", "Bludgeoning, Slashing, and Piercing", "Cold"],
    damageWeaknesses: ["Fire", "Lightning"],
    description: "",
    features: [
        {
            title: "Delicate Propellers",
            description:
                "On every ranged attack against this target, this helicopter may make a DC10 DEX saving throw. On failure, the propellers are destroyed, causing the vehicle to crash"
        },
        {
            title: "Piloted",
            description:
                "Any INT, WIS, or CHA checks and saving throws are transferred to both pilots. The helicopter must have at least one pilot to prevent crashing."
        }
    ],
    hp: 160,
    inventory: ["2 Healer's Kit", "2 Parachutes"],
    languages: [],
    reactions: [],
    savingThrows: ["STR +10", "DEX +10", "CON +10"],
    senses: [],
    size: "Large",
    skills: ["Acrobatics +8"],
    speed: "100 ft. flying",
    stats: {
        str: 18,
        dex: 20,
        con: 25,
        int: 0,
        wis: 0,
        cha: 0
    },
    type: "Construct"
};
