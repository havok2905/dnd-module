import { ICreature } from "../../interfaces/i-creature";

export const THIEVES_GUILD_UNDERLING: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Dagger",
            description:
                "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "1/4",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Cunning Action.",
            description:
                " On each of its turns, the thief can use a bonus action to take the Dash, Disengage, or Hide action."
        },
        {
            title: "Sneak Attack (1/Turn)",
            description:
                "The thief deals an extra 3 (1d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the thief that isn't incapacitated and the thief doesn't have disadvantage on the attack roll."
        }
    ],
    hp: 18,
    inventory: ["Thieves Tools"],
    languages: ["Common", "Dwarvish"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 10"],
    size: "Small",
    skills: ["Stealth +6"],
    speed: "30 ft.",
    stats: {
        str: 8,
        dex: 14,
        con: 10,
        int: 10,
        wis: 12,
        cha: 12
    },
    type: "Humanoid"
};
