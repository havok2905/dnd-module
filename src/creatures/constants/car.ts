import { ICreature } from "../../interfaces/i-creature";

export const CAR: ICreature = {
    ac: 16,
    actions: [],
    alignment: "Unaligned",
    challenge: "5",
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
            title: "Tires",
            description:
                "On every ranged attack against this target, this helicopter may make a DC10 DEX saving throw. On failure, a tire pops, causing the vehicle granting advantage to attack attempts against the car."
        },
        {
            title: "Piloted",
            description:
                "Any INT, WIS, or CHA checks and saving throws are transferred to the driver. The helicopter must have one driver to prevent crashing."
        }
    ],
    hp: 131,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: ["STR +8", "DEX +8", "CON +8"],
    senses: [],
    size: "Large",
    skills: [],
    speed: "100 ft.",
    stats: {
        str: 18,
        dex: 16,
        con: 20,
        int: 0,
        wis: 0,
        cha: 0
    },
    type: "Construct"
};
