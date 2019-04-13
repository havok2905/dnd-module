import { ICreature } from "../../interfaces/i-creature";

export const PRIEST_OF_THOR: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Hammer",
            description:
                "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage."
        },
        {
            title: "Lightning Bolt",
            description:
                "Recharge (6): A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren’t being worn or carried."
        }
    ],
    alignment: "Chaotic Good",
    challenge: "2",
    conditionImmunities: [],
    damageImmunities: ["Lightning", "Thunder"],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [],
    hp: 25,
    languages: ["Common"],
    reactions: [],
    savingThrows: [],
    senses: ["passive Perception 13"],
    size: "Medium",
    skills: ["Medicine +7", "Persuasion +3", "Religion +4"],
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
