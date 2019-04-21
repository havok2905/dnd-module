import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ItemBlock } from "../../src/components/item-block/item-block";
import { Page } from "../../src/components/page/page";
import { ItemFactory } from "../../factories/item-factory";

storiesOf("ItemBlock", module)
    .addDecorator(withInfo)
    .add("ItemBlock without image", () => {
        const data = ItemFactory.build({
            image: null
        });

        return (
            <Page>
                <ItemBlock {...data}>
                    <p>{data.description}</p>
                </ItemBlock>
            </Page>
        );
    })
    .add("ItemBlock with image", () => {
        const data = ItemFactory.build({
            image: "https://placekitten.com/900/300"
        });

        return (
            <Page>
                <ItemBlock {...data}>
                    <p>{data.description}</p>
                </ItemBlock>
            </Page>
        );
    });
