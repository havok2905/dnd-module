export default {
    ac: 18,
    actions: [
        {
            title: "Multiattack",
            description:
                "The myconid uses either its Deathcap Spores or its Slumber Spores, then makes two fist attacks."
        },
        {
            title: "Fist",
            description:
                "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (4d4 + 5) bludgeoning damage plus 10 (4d4) poison damage."
        },
        {
            title: "Deathcap Spores",
            description:
                "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 13 Constitution saving throw or be Poisoned for 3 rounds. While poisoned this way, the target also takes 10 (4d4) poison damage at the start of each of its turns. The target repeats the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
            title: "Slumber Spores",
            description:
                "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 13 Constitution saving throw or be Poisoned and Unconscious for 1 minute. A creature wakes up if it takes damage, or if another creature uses its action to shake it awake."
        }
    ],
    alignment: "Lawful Neutral",
    challenge: "12",
    conditionImmunities: ["poisoned", "charmed"],
    damageImmunities: ["poison", "necrotic"],
    damageResistances: ["bludgeoning from non magical weapons"],
    damageWeaknesses: ["fire", "cold"],
    description: "",
    features: [
        {
            title: "Masters",
            description:
                "When both myconid are destoryed, their link to the Aboleth is also destroyed."
        },
        {
            title: "Enslave",
            description:
                "If the Myconid succeeds a strength contest, the target is now charmed by the Myconid and will take part in the collective conciousness. If the player is removed, they will lose 2 wisdom from their ability score for each day enslaved."
        }
    ],
    hp: 300,
    languages: ["None"],
    reactions: [],
    savingThrows: [],
    senses: ["passive Perception 12"],
    size: "Large",
    skills: [],
    speed: "20 ft.",
    stats: {
        str: 20,
        dex: 10,
        con: 20,
        int: 10,
        wis: 10,
        cha: 10
    },
    type: "plant"
};
