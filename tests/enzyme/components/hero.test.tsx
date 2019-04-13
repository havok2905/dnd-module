import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Hero } from "../../../src/components/hero/hero";

Enzyme.configure({ adapter: new Adapter() });

describe("Hero", () => {
    test("renders", () => {
        const hero = shallow(<Hero src="" alt="" />);
        expect(hero.exists()).toBe(true);
    });
});
