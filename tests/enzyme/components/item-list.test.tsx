import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ItemList } from "../../../src/components/compendium/item-list";

Enzyme.configure({ adapter: new Adapter() });

class ItemListPageObject {
    private component;

    constructor(component) {
        this.component = component;
    }

    items() {
        return this.component.find('[data-qa-target="item-list-item"]');
    }

    searchField() {
        return this.component.find('[data-qa-target="item-list-search-field"]');
    }
}

const items = [
    {
        name: "Foo"
    },
    {
        name: "Bar"
    },
    {
        name: "Baz"
    }
];

describe("ItemList", () => {
    test("renders", () => {
        const list = shallow(<ItemList items={items} />);
        expect(list.exists()).toBe(true);
    });

    test("renders all items", () => {
        const list = shallow(<ItemList items={items} />);
        const pageObject = new ItemListPageObject(list);
        const listItems = pageObject.items();

        expect(listItems).toHaveLength(3);
    });

    test("searches items", () => {
        const list = shallow(<ItemList items={items} />);
        const pageObject = new ItemListPageObject(list);

        pageObject
            .searchField()
            .simulate("change", { target: { value: "Ba" } });

        expect(pageObject.items()).toHaveLength(2);
    });
});
