import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Compendium } from "../../../src/components/compendium/compendium";

Enzyme.configure({ adapter: new Adapter() });

class CompendiumPageObject {
    constructor(component) {
        this.component = component;
    }

    tabs() {
        return this.component.find('[data-qa-target="tab-list"]');
    }
}

describe("Compendium", () => {
    test("renders", () => {
        const compendium = shallow(<Compendium />);
        expect(compendium.exists()).toBe(true);
    });

    test("renders tabs", () => {
        const compendium = shallow(<Compendium />);
        const pageObject = new CompendiumPageObject(compendium);

        expect(pageObject.tabs()).toHaveLength(1);
    });
});
