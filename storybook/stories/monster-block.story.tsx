import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { MonsterBlock } from "../../src/components/monster-block/monster-block";
import { Page } from "../../src/components/page/page";
import { CreatureFactory } from "../../factories/creature-factory";

storiesOf("Monster Block", module)
    .addDecorator(withInfo)
    .add("Monster Block", () => {
        const data = CreatureFactory.build();
        return (
            <Page>
                <MonsterBlock {...data} />
            </Page>
        );
    });
