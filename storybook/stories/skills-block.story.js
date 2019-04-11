import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { SkillsBlock } from "../../src/components/skills-block/skills-block";
import { Page } from "../../src/components/page/page";

const expertises = {
    slightOfHand: {
        name: "Slignt of Hand",
        type: "dex"
    }
};

const proficiencies = {
    stealth: {
        name: "Stealth",
        type: "dex"
    },
    acrobatics: {
        name: "Acrobatics",
        type: "dex"
    }
};

const stats = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
};

const proficiencyBonus = 4;

const data = {
    expertises,
    proficiencies,
    proficiencyBonus,
    stats
};

storiesOf("SkillsBlock", module)
    .addDecorator(withInfo)
    .add("SkillsBlock", () => {
        return (
            <Page>
                <SkillsBlock {...data} />
            </Page>
        );
    });
