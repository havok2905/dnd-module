import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Page } from "../../src/components/page/page";
import { Spell } from "../../src/components/spell/spell";

const data = {
    name: "Firebolt",
    rulesText:
        "You hurl a small flame at a creature or object, making a ranged spell attack. The target takes 1d10 fire damage on hit. The fire ignites any flammable object hit by it that isn't being worn or carried.",
    higherLevelsText:
        "The spell's number of damage dice increases by one at levels 5, 11, and 17.",
    level: 0,
    school: "Evocation",
    ritual: false,
    castTime: "1 Action",
    range: "120 ft.",
    components: ["V", "S"],
    material: ["Fake Material", "Totally Not Needed"],
    concentration: false,
    duration: "Instantaneous",
    casters: ["Sorcerers", "Wizards"]
};

storiesOf("Spell", module)
    .addDecorator(withInfo)
    .add("Spell", () => {
        return (
            <Page>
                <Spell {...data} />
            </Page>
        );
    });
