import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "../../../src/components/button/button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
    test("renders", () => {
        const button = shallow(<Button text="text" type="button" />);
        expect(button.exists()).toBe(true);
    });
});
