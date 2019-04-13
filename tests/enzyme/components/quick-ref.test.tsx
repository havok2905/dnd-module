import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { QuickRef } from "../../../src/components/quick-ref/quick-ref";

Enzyme.configure({ adapter: new Adapter() });

describe("QuickRef", () => {
    test("renders", () => {
        const quickRef = shallow(<QuickRef />);
        expect(quickRef.exists()).toBe(true);
    });
});
