import { ICreature } from "../../interfaces/i-creature";

export const GIANT_GHOSTLY_ARCTIC_CROCODILE: ICreature = {
    ac: 16,
    actions: [
        {
            title: "Multiattack",
            description: "The crocodile makes two actions."
        },
        {
            title: "Bite",
            description:
                "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: (3d12 + 5) piercing damage, and the target is Grappled (escape DC 16). Until this grapple ends, the target is Restrained, and the Crocodile can't bite another target."
        },
        {
            title: "Tail",
            description:
                "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not Grappled by the Crocodile. Hit: (3d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone."
        },
        {
            title: "Horrifying Visage",
            description:
                "Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be Frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 _ 10 years. A Frightened target can repeat the saving throw at the end of each of its turns, ending the Frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a Greater Restoration spell, but only within 24 hours of it occurring."
        },
        {
            title: "Etherealness",
            description:
                "The ghost enters the Ethereal Plane from The Material Plane, or vice versa. It is visible on The Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
        },
        {
            title: "Cold Breath (Recharge 5-6)",
            description:
                "The crocodile exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "10",
    conditionImmunities: [
        "Charmed",
        "Exhaustion",
        "Frightened",
        "Grappled",
        "Paralyzed",
        "Petrified",
        "Poisoned",
        "Prone",
        "Restrained"
    ],
    damageImmunities: ["Cold", "Necrotic", "Poison"],
    damageResistances: [
        "Acid",
        "Bludgeoning, Piercing, and Slashing from Nonmagical Weapons"
    ],
    damageWeaknesses: ["Fire"],
    description:
        "This hound has rotting, mottled skin, dripping over a skeletal body. Razor sharp teeth can be seen peaking out through patches of missing flesh.",
    features: [
        {
            title: "Hold Breath",
            description: "The crocodile can hold it's breath for 30 minutes"
        },
        {
            title: "Incorporeal Movement.",
            description:
                "The ghost can move through other creatures and Objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        }
    ],
    hp: 180,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 60ft.", "Passive Perception: 10"],
    size: "Huge",
    skills: [],
    speed: "30ft. Swim 50 ft. Fly 40ft.",
    stats: {
        str: 21,
        dex: 9,
        con: 17,
        int: 2,
        wis: 10,
        cha: 7
    },
    type: "Undead"
};
