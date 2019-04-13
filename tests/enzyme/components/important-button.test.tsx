import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ImportantButton } from "../../../src/components/button/important-button";

Enzyme.configure({ adapter: new Adapter() });

describe("ImportantButton", () => {
    test("renders", () => {
        const button = shallow(
            <ImportantButton text="text" typeStr="button" />
        );
        expect(button.exists()).toBe(true);
    });
});
