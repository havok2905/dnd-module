import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { CharacterSheet } from "../../src/components/character-sheet/character-sheet";
import { Page } from "../../src/components/page/page";
import { CharacterFactory } from "../../factories/character-factory";

const data = CharacterFactory.build();

storiesOf("CharacterSheet", module)
    .addDecorator(withInfo)
    .add("CharacterSheet", () => {
        return (
            <Page>
                <CharacterSheet {...data} />
            </Page>
        );
    });
