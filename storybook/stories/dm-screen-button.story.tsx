import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { DmScreenButton } from "../../src/components/button/dm-screen-button";
import { Page } from "../../src/components/page/page";

storiesOf("DmScreenButton", module)
    .addDecorator(withInfo)
    .add("DmScreenButton", () => {
        return (
            <Page>
                <DmScreenButton />
            </Page>
        );
    });
