import { ICreature } from "../../interfaces/i-creature";

export const ICE_ELEMENTAL: ICreature = {
    ac: 16,
    actions: [
        {
            title: "Multiattack",
            description: "Two slam attacks. One slam attack and one action"
        },
        {
            title: "Slam",
            description:
                "Melee Weapon Attack: +8 to hit, reach 10ft, one target. 2d8+5 bludgeoning damage."
        },
        {
            title: "Ice Breath",
            description:
                "The elemental makes a 15 foot cone of icy wind. Each creature in range must make a DC15 CON saving throw. The target takes 2d6+3 cold damage and half as much on a successful save."
        }
    ],
    alignment: "Neutral",
    challenge: "5",
    conditionImmunities: [
        "exhaustion",
        "grappled",
        "paralyzed",
        "petrified",
        "poisoned",
        "prone",
        "restrained",
        "unconscious"
    ],
    damageImmunities: ["cold", "poison"],
    damageResistances: [
        "acid",
        "bludgeoning, piercing, and slashing from non magical attacks"
    ],
    damageWeaknesses: ["fire"],
    description: "",
    features: [
        {
            title: "Ice Touch",
            description:
                "Any creature that starts it's turn grappled by the elemental begins to freeze over. With a DC 12 STR saving throw, the ice can be broken. Until it is, the target's speed is halved, the target has disadvantage on attack rolls, and the target takes 1d6+3 cold damage."
        },
        {
            title: "Cold Absorb",
            description:
                "Any cold or water based damage dealt to the elemental is converted into gained hit points."
        }
    ],
    hp: 114,
    inventory: [],
    languages: ["Aquan"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 10", "Darkvision 60ft."],
    size: "Large",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 20,
        dex: 8,
        con: 18,
        int: 6,
        wis: 10,
        cha: 8
    },
    type: "Elemental"
};
