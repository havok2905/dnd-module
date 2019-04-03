import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Footer } from "../../src/components/footer/footer";

storiesOf("Footer", module)
    .addDecorator(withInfo)
    .add("Footer", () => {
        return <Footer />;
    });
