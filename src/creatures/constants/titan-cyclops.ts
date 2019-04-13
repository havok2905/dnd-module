import { ICreature } from "../../interfaces/i-creature";

export const TITAN_CYCLOPS: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Multiattack",
            description:
                "Can make 3 Smash attacks or 2 Smash and 1 Grapple or Hypnotic Eye or Smash to Ground attack per turn."
        },
        {
            title: "Smash",
            description:
                "+5 to hit. The player takes 80+4d10 bludgeoning damage."
        },
        {
            title: "Grapple",
            description:
                "Have the target within 30 feet make a DC17 STR saving throw. On failure, the target is now grappled and lifted above the clouds, 1 mile into the sky. A player may retry the saving throw at the start of their turn to escape."
        },
        {
            title: "Smash to Ground",
            description:
                "While grappled, the titan smashes the player down the ground causing 100+3d10 bludgeoning damage. This takes 2 turns to complete."
        },
        {
            title: "Hypnotic Eye:",
            description:
                "Have the player make a DC14 WIS saving throw. On failure they target is now charmed for 1 hour."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "25",
    conditionImmunities: ["Charm", "Poison"],
    damageImmunities: ["Poison"],
    damageResistances: [],
    damageWeaknesses: ["Radiant"],
    description:
        "Half a mile high, these pale grey creatures tower into the clouds above. They have long arms that drag at their sides with thick club like fingers. Through the haze of the clouds above you can see a glowing red orb peering down at you.",
    features: [
        {
            title: "Telepathic Bond.",
            description:
                "While the Titan Cyclops is on the same plane of existence as its master, it can magically convey what it Senses to its master, and the two can communicate telepathically."
        }
    ],
    hp: 850,
    inventory: [],
    languages: ["Understands The Languages Of Its Creator But Can't Speak"],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 60ft.", "Passive Perception: 15"],
    size: "Gargantuan",
    skills: [],
    speed: "20 ft.",
    stats: {
        str: 24,
        dex: 10,
        con: 18,
        int: 6,
        wis: 6,
        cha: 18
    },
    type: "Construct"
};
