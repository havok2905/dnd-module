import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Hero } from "../../src/components/hero/hero";

storiesOf("Hero", module)
    .addDecorator(withInfo)
    .add("Hero", () => {
        return <Hero alt="foo" src="https://placekitten.com/2000/600" />;
    });
