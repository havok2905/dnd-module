import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SpellSearch } from "../../../src/components/compendium/spell-search";
import { SpellFactory } from "../../../factories/spell-factory";

Enzyme.configure({ adapter: new Adapter() });

class SpellSearchPageObject {
    private component;

    constructor(component) {
        this.component = component;
    }

    spells() {
        return this.component.find('[data-qa-target="spell-search-item"]');
    }

    searchField() {
        return this.component.find('[data-qa-target="spell-search-field"]');
    }
}

const spells = [
    SpellFactory.build({
        name: "Foo"
    }),
    SpellFactory.build({
        name: "Bar"
    }),
    SpellFactory.build({
        name: "Baz"
    })
];

describe("SpellSearch", () => {
    test("renders", () => {
        const list = shallow(<SpellSearch spells={spells} />);
        expect(list.exists()).toBe(true);
    });

    test("renders all spells", () => {
        const list = shallow(<SpellSearch spells={spells} />);
        const pageObject = new SpellSearchPageObject(list);
        const listItems = pageObject.spells();

        expect(listItems).toHaveLength(3);
    });

    test("searches spells", () => {
        const list = shallow(<SpellSearch spells={spells} />);
        const pageObject = new SpellSearchPageObject(list);

        pageObject
            .searchField()
            .simulate("change", { target: { value: "Ba" } });

        expect(pageObject.spells()).toHaveLength(2);
    });
});
