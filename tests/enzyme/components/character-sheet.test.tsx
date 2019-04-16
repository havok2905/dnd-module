import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CharacterSheet } from "../../../src/components/character-sheet/character-sheet";
import { CharacterFactory } from "../../factories/character-factory";

Enzyme.configure({ adapter: new Adapter() });

describe("CharacterSheet", () => {
    test("renders", () => {
        const data = CharacterFactory.build();
        const sheet = shallow(<CharacterSheet {...data} />);
        expect(sheet.exists()).toBe(true);
    });
});
