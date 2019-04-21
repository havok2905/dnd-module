import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Page } from "../../src/components/page/page";
import { Spell } from "../../src/components/spell/spell";
import { SpellFactory } from "../../factories/spell-factory";

storiesOf("Spell", module)
    .addDecorator(withInfo)
    .add("Spell", () => {
        const data = SpellFactory.build();
        return (
            <Page>
                <Spell {...data} />
            </Page>
        );
    });
