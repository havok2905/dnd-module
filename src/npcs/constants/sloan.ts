import { ICreature } from "../../interfaces/i-creature";

export const SLOAN: ICreature = {
    ac: 17,
    actions: [
        {
            title: "Multi Attack",
            description: "Can make three spell attacks or one dragon summon."
        },
        {
            title: "Scorching Ray",
            description:
                "You create three rays of fire and hurl them at targets within range of 120 ft. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 6d12 fire damage."
        },
        {
            title: "Burning Hands",
            description:
                "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 6d12 fire damage on a failed save, or half as much damage on a successful one."
        },
        {
            title: "Gaseous Form",
            description:
                "You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the Duration. The spell ends if the creature drops to 0 Hit Points. An incorporeal creature isn't affected."
        },
        {
            title: "Hellish Rebuke",
            description:
                "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one."
        },
        {
            title: "Dragon Summon (Recharge 6)",
            description: "Sloan summons one *Young Red Dragon* to the fight."
        },
        {
            title: "Dragon Summon (Once per Week)",
            description:
                "Sloan summons one *Adult Red Dragon* to the fight if there is enough space to house one."
        }
    ],
    alignment: "Lawful Evil",
    challenge: "17",
    conditionImmunities: [],
    damageImmunities: ["fire"],
    damageResistances: [],
    damageWeaknesses: [],
    description: "Quick tempered, mid thirties, redheaded woman.",
    features: [],
    hp: 150,
    languages: ["Common", "Infernal", "Draconic"],
    reactions: [],
    savingThrows: [],
    senses: ["passive Perception 12"],
    size: "Medium",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 13,
        dex: 15,
        con: 14,
        int: 15,
        wis: 18,
        cha: 20
    },
    type: "human"
};
