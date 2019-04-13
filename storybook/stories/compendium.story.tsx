import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Compendium } from "../../src/components/compendium/compendium";
import { Page } from "../../src/components/page/page";

storiesOf("Compendium", module)
    .addDecorator(withInfo)
    .add("Compendium", () => {
        return (
            <Page>
                <Compendium />
            </Page>
        );
    });
