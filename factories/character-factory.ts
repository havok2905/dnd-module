import * as Factory from "factory.ts";

import { ICharacter } from "../src/interfaces/i-character";

export const CharacterFactory = Factory.Sync.makeFactory<ICharacter>({
    ac: 10,
    armorProficiencies: ["Medium"],
    abilities: {
        acrobatics: {
            name: "Acrobatics",
            type: "dex",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        animalHandling: {
            name: "Animal Handling",
            type: "wis",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        arcana: {
            name: "Arcana",
            type: "int",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        athletics: {
            name: "Athletics",
            type: "str",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        deception: {
            name: "Deception",
            type: "cha",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        history: {
            name: "History",
            type: "int",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        insight: {
            name: "Insight",
            type: "wis",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        intimidation: {
            name: "Intimidation",
            type: "cha",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        investigation: {
            name: "Investigation",
            type: "int",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        medicine: {
            name: "Medicine",
            type: "wis",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        nature: {
            name: "Nature",
            type: "int",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        perception: {
            name: "Perception",
            type: "wis",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        performance: {
            name: "Performance",
            type: "cha",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        persuasion: {
            name: "Persuasion",
            type: "cha",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        religion: {
            name: "Religion",
            type: "int",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        slightOfHand: {
            name: "Slight of hand",
            type: "dex",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        stealth: {
            name: "Stealth",
            type: "dex",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        survival: {
            name: "Survival",
            type: "wis",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        }
    },
    actions: [
        {
            title: "An Action",
            description: "It does an action thing"
        }
    ],
    background: "Folk Hero",
    bonusActions: [
        {
            title: "A Bonus Actions",
            description: "It does a bonus action thing"
        }
    ],
    classes: [
        {
            name: "Fighter",
            level: 1
        }
    ],
    description: {
        age: 35,
        alignment: "Lawful Good",
        alliesAndOrganizations: "None",
        appearance: "A person.",
        backstory: "Things happened",
        bonds: ["People"],
        eyes: "Brown",
        faith: "N/A",
        flaws: ["Issues"],
        gender: "Male",
        hair: "Brown",
        height: "5'8",
        ideals: ["Nice stuff."],
        notes: "Lorem ipsum dolor",
        personalityTraits: ["Quirky"],
        size: "Medium",
        skin: "White",
        weight: "180lbs."
    },
    features: [
        {
            title: "A Feature",
            description: "It does a feature thing"
        }
    ],
    hp: {
        maxHp: 10,
        tempHp: 5,
        currentHp: 10
    },
    image: "https://placekitten.com/200/300",
    initiative: 10,
    languages: ["Common"],
    passiveInsight: {
        name: "Passive Insight",
        type: "WIS",
        value: 10
    },
    passiveInvestigation: {
        name: "Passive Investigation",
        type: "WIS",
        value: 10
    },
    passivePerception: {
        name: "Passive Perception",
        type: "WIS",
        value: 10
    },
    proficiencyBonus: 2,
    race: "Human",
    reactions: [
        {
            title: "A Reactions",
            description: "It does a reaction thing"
        }
    ],
    savingThrows: {
        str: {
            title: "STR",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        dex: {
            title: "DEX",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        con: {
            title: "CON",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        int: {
            title: "INT",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        wis: {
            title: "WIS",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        cha: {
            title: "CHA",
            modifier: 0,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        }
    },
    senses: [
        {
            title: "Darkvision",
            description: "60ft."
        }
    ],
    speed: [
        {
            title: "Walking",
            description: "30ft."
        }
    ],
    spells: [
        {
            level: 1,
            list: ["Firebolt"]
        }
    ],
    spellSlots: [
        {
            count: 1,
            level: 1
        }
    ],
    stats: {
        str: {
            title: "STR",
            modifier: 0,
            score: 10,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        dex: {
            title: "DEX",
            modifier: 0,
            score: 10,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        con: {
            title: "CON",
            modifier: 0,
            score: 10,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        int: {
            title: "INT",
            modifier: 0,
            score: 10,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        wis: {
            title: "WIS",
            modifier: 0,
            score: 10,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        },
        cha: {
            title: "CHA",
            modifier: 0,
            score: 10,
            proficiencyInfo: {
                hasExpertise: false,
                hasProficiency: false,
                hasOther: false
            }
        }
    },
    toolProficiencies: ["Carpenters Tools"],
    weaponProficiencies: ["All weapons"]
});
