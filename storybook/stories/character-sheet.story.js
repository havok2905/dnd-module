import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { CharacterSheet } from "../../src/components/character-sheet/character-sheet";
import { Page } from "../../src/components/page/page";
import { Bard } from "../../src/classes/bard";

const armorProficiencies = ["Light Armor", "Medium Armor"];

const background = "Folk Hero";

const classes = [
    {
        level: 7,
        classObj: {
            name: "Fighter",
            levels: []
        }
    },
    {
        level: 3,
        classObj: Bard
    }
];

const description = {
    age: 35,
    alignment: "Lawful Good",
    alliesAndOrganizations: "people",
    appearance: "I look like a person",
    backstory: "I do the things and the stuff",
    bonds: ["I protect those who cannot protect themselves"],
    eyes: "Brown",
    faith: "Ao",
    flaws: ["I have a weakness for the vices of the city"],
    gender: "Male",
    hair: "Brown",
    height: "6'0",
    ideals: ["CODE ALL THE THINGS"],
    notes: "Lorem ipsum dolor set amet",
    personalityTraits: ["I judge people by their actions, not their words"],
    size: "Medium",
    skin: "Tan",
    weight: "180lbs"
};

const expertises = {
    intimidation: {
        name: "Intimidation",
        type: "cha"
    },
    slightOfHand: {
        name: "Slight of Hand",
        type: "dex"
    }
};

const features = [
    {
        title: "",
        description: ""
    }
];

const hp = {
    currentHp: 42,
    tempHp: 10,
    maxHp: 42
};

const languages = ["Common", "Elvish"];

const proficiencies = {
    animalHandling: {
        name: "Animal Handling",
        type: "wis"
    },
    arcana: {
        name: "Arcana",
        type: "int"
    },
    athletics: {
        name: "Athletics",
        type: "str"
    },
    history: {
        name: "History",
        type: "int"
    },
    nature: {
        name: "Nature",
        type: "int"
    },
    survival: {
        name: "Survival",
        type: "wis"
    }
};

const proficiencyBonus = 4;

const race = "Human";

const savingThrowExpertises = [];

const savingThrowProficiencies = ["str", "con"];

const senses = [
    {
        name: "Darkvision",
        value: "60ft."
    }
];

const speed = [
    {
        name: "Walking",
        value: "30ft."
    }
];

const spellSlots = [
    { count: 4 },
    { count: 2 },
    { count: 1 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 }
];

const stats = {
    str: 11,
    dex: 17,
    con: 11,
    int: 13,
    wis: 14,
    cha: 16
};

const toolProficiencies = ["Thieve's Tools"];

const weaponProficiencies = ["Simple Weapons"];

const data = {
    armorProficiencies,
    background,
    classes,
    description,
    expertises,
    features,
    hp,
    languages,
    proficiencies,
    proficiencyBonus,
    race,
    savingThrowExpertises,
    savingThrowProficiencies,
    senses,
    spellSlots,
    speed,
    stats,
    toolProficiencies,
    weaponProficiencies
};

storiesOf("CharacterSheet", module)
    .addDecorator(withInfo)
    .add("CharacterSheet", () => {
        return (
            <Page>
                <CharacterSheet {...data} />
            </Page>
        );
    });
