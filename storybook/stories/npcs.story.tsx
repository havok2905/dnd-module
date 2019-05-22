import * as React from "react";
import { storiesOf } from "@storybook/react";
import { CollapsableContainer } from "../../src/components/containers/collapsable-container";
import NPCS from "../../src/npcs/index";
import { MonsterBlock } from "../../src/components/monster-block/monster-block";
import { Page } from "../../src/components/page/page";

storiesOf("NPCS", module).add("NPCS", () => {
    return (
        <Page>
            {Object.keys(NPCS).map(key => {
                return (
                    <CollapsableContainer title={key}>
                        <MonsterBlock {...NPCS[key]} />
                    </CollapsableContainer>
                );
            })}
        </Page>
    );
});
