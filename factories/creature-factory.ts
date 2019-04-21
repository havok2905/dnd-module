import * as Factory from "factory.ts";

import { ICreature } from "../src/interfaces/i-creature";

export const CreatureFactory = Factory.Sync.makeFactory<ICreature>({
    ac: 10,
    actions: [
        {
            title: "Do a thing",
            description: "Doing a thing. See?"
        }
    ],
    alignment: "Lawful Good",
    challenge: "1",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "A generic test factory",
    features: [],
    hp: 10,
    image: null,
    inventory: null,
    languages: ["Common"],
    name: null,
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception: 10"],
    size: "Medium",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    },
    type: "Humanoid"
});
