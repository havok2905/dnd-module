import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ImportantButton } from "../../src/components/button/important-button";
import { Page } from "../../src/components/page/page";

storiesOf("ImportantButton", module)
    .addDecorator(withInfo)
    .add("ImportantButton", () => {
        return (
            <Page>
                <ImportantButton
                    onClick={() => {}}
                    qaTarget="roll-table-button"
                    text="Roll"
                    typeStr="button"
                />
            </Page>
        );
    });
