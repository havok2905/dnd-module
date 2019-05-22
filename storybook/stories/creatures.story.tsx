import * as React from "react";
import { storiesOf } from "@storybook/react";
import { CollapsableContainer } from "../../src/components/containers/collapsable-container";
import Creatures from "../../src/creatures/index";
import { MonsterBlock } from "../../src/components/monster-block/monster-block";
import { Page } from "../../src/components/page/page";

storiesOf("Creatures", module).add("Creatures", () => {
    return (
        <Page>
            {Object.keys(Creatures).map(key => {
                return (
                    <CollapsableContainer title={key}>
                        <MonsterBlock {...Creatures[key]} />
                    </CollapsableContainer>
                );
            })}
        </Page>
    );
});
