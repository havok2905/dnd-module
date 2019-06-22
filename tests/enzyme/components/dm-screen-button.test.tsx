import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DmScreenButton } from "../../../src/components/button/dm-screen-button";

Enzyme.configure({ adapter: new Adapter() });

describe("DmScreenButton", () => {
    test("renders", () => {
        const button = shallow(<DmScreenButton />);
        expect(button.exists()).toBe(true);
    });
});
