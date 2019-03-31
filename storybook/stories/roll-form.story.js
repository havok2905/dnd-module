import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Page } from "../../src/components/page/page";
import { RollForm } from "../../src/components/roll-form/roll-form";

storiesOf("RollForm", module)
    .addDecorator(withInfo)
    .add("RollForm", () => {
        return (
            <Page>
                <RollForm />
            </Page>
        );
    });
