import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Page } from "../../src/components/page/page";
import { QuickRef } from "../../src/components/quick-ref/quick-ref";

storiesOf("QuickRef", module)
    .addDecorator(withInfo)
    .add("QuickRef", () => {
        return (
            <Page>
                <QuickRef />
            </Page>
        );
    });
