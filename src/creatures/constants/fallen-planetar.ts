import { ICreature } from "../../interfaces/i-creature";

export const FALLEN_PLANETAR: ICreature = {
    ac: 19,
    actions: [
        {
            title: "Multiattack",
            description: "The planetar makes two melee attacks."
        },
        {
            title: "Greatsword",
            description:
                "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) necrotic damage."
        },
        {
            title: "Healing Touch",
            description:
                "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness."
        }
    ],
    alignment: "Lawful Evil",
    challenge: "16",
    conditionImmunities: ["charmed", "exhaustion", "frightened"],
    damageImmunities: ["necrotic"],
    damageResistances: [
        "radiant",
        "bludgeoning, piercing, and slashing from nonmagical attacks"
    ],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Infernal Weapons",
            description:
                "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 necrotic damage (included in the attack)."
        },
        {
            title: "Divine Awareness",
            description: "The planetar knows if it hears a lie."
        },
        {
            title: "Innate Spellcasting",
            description:
                "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components: At will: detect evil and good, invisibility (self only) 3/day each: blade barrier, dispel evil and good, flame strike, raise dead 1/day each: commune, control weather, insect plague"
        },
        {
            title: "Magical Resistance",
            description:
                "The planetar has advantage on saving throws against spells and other magical effects."
        }
    ],
    hp: 0,
    inventory: [],
    languages: ["All", "Telepathy 120ft."],
    reactions: [],
    savingThrows: ["Cha +12", "Con +12", "Wis +11"],
    senses: ["truesight 120 ft.", "passive Perception 21"],
    size: "Medium",
    skills: ["Perception +11"],
    speed: "30 ft.",
    stats: {
        str: 24,
        dex: 20,
        con: 24,
        int: 19,
        wis: 22,
        cha: 25
    },
    type: "Celestial"
};
