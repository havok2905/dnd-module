export default {
    ac: 18,
    actions: [
        {
            title: "Tentacle",
            description:
                "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: (3d6 + 10) bludgeoning damage. The target is grappled (escape dc 18) Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target"
        },
        {
            title: "Fling",
            description:
                "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "5",
    conditionImmunities: ["Frightened", "Paralyzed"],
    damageImmunities: [
        "Lightning",
        "Bludgeoning, Piercing, And Slashing From Nonmagical Weapons"
    ],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [],
    hp: 30,
    languages: [],
    reactions: [],
    savingThrows: ["Str +17", "Dex +7", "Con +14", "Int +13", "Wis +11"],
    senses: ["passive Perception 14"],
    size: "Gargantuan",
    skills: [],
    speed: "0 ft.",
    stats: {
        str: 30,
        dex: 11,
        con: 25,
        int: 22,
        wis: 18,
        cha: 20
    },
    type: "Monstrosity"
};
