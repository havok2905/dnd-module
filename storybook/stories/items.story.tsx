import * as React from "react";
import { storiesOf } from "@storybook/react";
import { CollapsableContainer } from "../../src/components/containers/collapsable-container";
import Items from "../../src/items/index";
import { ItemBlock } from "../../src/components/item-block/item-block";
import { Page } from "../../src/components/page/page";

storiesOf("Items", module).add("Items", () => {
    return (
        <Page>
            {Object.keys(Items).map(key => {
                return (
                    <CollapsableContainer title={Items[key].name}>
                        <ItemBlock {...Items[key]}>
                            {Items[key].description}
                        </ItemBlock>
                    </CollapsableContainer>
                );
            })}
        </Page>
    );
});
