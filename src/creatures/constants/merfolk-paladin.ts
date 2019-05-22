import { ICreature } from "../../interfaces/i-creature";

export const MERFOLK_PALADIN: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Multi Attack",
            description: "Uses three spear attacks"
        },
        {
            title: "Spear",
            description:
                "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 1d6+3 piercing damage, or 1d8+3 piercing damage if used with two hands to make a melee attack."
        }
    ],
    alignment: "Lawful Good",
    challenge: "5",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description:
        "These merfolk are light blue skinned with silver flowing patterns tattooed all over their bodies. In both hands, they hold a silver tipped spear at the ready",
    features: [
        {
            title: "Amphibious",
            description: "This creature can breathe air and water."
        },
        {
            title: "Brave",
            description:
                "This creature has advantage on saving throws against being frightened."
        },
        {
            title: "Divine Smite",
            description:
                "As a bonus action, this creature can expend a spell slot to cause its melee weapon attacks to magically deal an extra 9 (2d8) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If this creature expends a spell slot of 2nd level or higher, the extra damage increases by 1d8 for each level above 1st. The damage increases by 1d8 if the target is an undead or a fiend."
        },
        {
            title: "Spellcasting",
            description:
                "This creature is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). This creature has the following spells prepared: 1st level (4 slots): bless, cure wounds, detect evil and good, command, protection from evil and good. 2nd level (2 slots): aid, lesser restoration, magic weapon, zone of truth."
        }
    ],
    hp: 58,
    inventory: ["1 Silver Amulet, worth 20 GP", "1 Spear"],
    languages: ["Aquan", "Common", "Elvish"],
    reactions: [
        {
            title: "Parry",
            description:
                "This creature adds 2 to its AC against one melee attack that would hit it. To do so, this creature must see the attacker and be wielding a melee weapon."
        }
    ],
    savingThrows: ["STR +5", "CON +4"],
    senses: ["passive Perception 10"],
    size: "Medium",
    skills: [
        "Athletics +5",
        "Insight +2",
        "Perception +2",
        "Persuasion +5",
        "Religion +4"
    ],
    speed: "10 ft., swim 40ft.",
    stats: {
        str: 17,
        dex: 16,
        con: 14,
        int: 11,
        wis: 11,
        cha: 16
    },
    type: "Humanoid (merfolk)"
};
