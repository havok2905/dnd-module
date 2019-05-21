import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ToTopButton } from "../../src/components/button/to-top-button";
import { Page } from "../../src/components/page/page";

storiesOf("ToTopButton", module)
    .addDecorator(withInfo)
    .add("ToTopButton", () => {
        return (
            <Page>
                <ToTopButton />
            </Page>
        );
    });
