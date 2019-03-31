import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Button } from "../../src/components/button/button";
import { Page } from "../../src/components/page/page";

storiesOf("Button", module)
    .addDecorator(withInfo)
    .add("Button", () => {
        return (
            <Page>
                <Button
                    onClick={() => {}}
                    qaTarget="roll-table-button"
                    text="Roll"
                    type="button"
                />
            </Page>
        );
    });
