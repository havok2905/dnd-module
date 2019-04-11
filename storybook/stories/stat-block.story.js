import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { StatBlock } from "../../src/components/stat-block/stat-block";
import { Page } from "../../src/components/page/page";

const data = {
    stats: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    }
};

storiesOf("StatBlock", module)
    .addDecorator(withInfo)
    .add("StatBlock", () => {
        return (
            <Page>
                <StatBlock {...data} />
            </Page>
        );
    });
