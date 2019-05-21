import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ToTopButton } from "../../../src/components/button/to-top-button";

Enzyme.configure({ adapter: new Adapter() });

describe("ToTopButton", () => {
    test("renders", () => {
        const button = shallow(<ToTopButton />);
        expect(button.exists()).toBe(true);
    });
});
