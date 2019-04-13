import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CreatureSearch } from "../../../src/components/compendium/creature-search";
import { CreatureFactory } from "../../factories/creature-factory";

Enzyme.configure({ adapter: new Adapter() });

class CreatureSearchPageObject {
    private component;

    constructor(component) {
        this.component = component;
    }

    creatures() {
        return this.component.find('[data-qa-target="creatures-list"]');
    }

    nameField() {
        return this.component.find(
            '[data-qa-target="creature-search-name-field"]'
        );
    }

    typeField() {
        return this.component.find(
            '[data-qa-target="creature-search-type-field"]'
        );
    }

    minCrField() {
        return this.component.find(
            '[data-qa-target="creature-search-min-cr-field"]'
        );
    }

    maxCrField() {
        return this.component.find(
            '[data-qa-target="creature-search-max-cr-field"]'
        );
    }

    alignmentDropdown() {
        return this.component.find(
            '[data-qa-target="creature-search-alignment-dropdown"]'
        );
    }
}

describe("CreatureSearch", () => {
    describe("name", () => {
        const creatures = [
            CreatureFactory.build({
                name: "Foo"
            }),
            CreatureFactory.build({
                name: "Bar"
            }),
            CreatureFactory.build({
                name: "Baz"
            })
        ];

        test("renders", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            expect(search.exists()).toBe(true);
        });

        test("renders all creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            expect(pageObject.creatures()).toHaveLength(3);
        });

        test("searches creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            pageObject
                .nameField()
                .simulate("change", { target: { value: "Fo" } });

            expect(pageObject.creatures()).toHaveLength(1);
        });
    });

    describe("type", () => {
        const creatures = [
            CreatureFactory.build({
                type: "Foo",
                name: "Test A"
            }),
            CreatureFactory.build({
                type: "Bar",
                name: "Test B"
            }),
            CreatureFactory.build({
                type: "Baz",
                name: "Test C"
            })
        ];

        test("renders", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            expect(search.exists()).toBe(true);
        });

        test("renders all creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            expect(pageObject.creatures()).toHaveLength(3);
        });

        test("searches creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            pageObject
                .typeField()
                .simulate("change", { target: { value: "Fo" } });

            expect(pageObject.creatures()).toHaveLength(1);
        });
    });

    describe("cr", () => {
        const creatures = [
            CreatureFactory.build({
                challenge: "5",
                name: "Test A"
            }),
            CreatureFactory.build({
                challenge: "5",
                name: "Test B"
            }),
            CreatureFactory.build({
                challenge: "10",
                name: "Test C"
            })
        ];

        test("renders", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            expect(search.exists()).toBe(true);
        });

        test("renders all creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            expect(pageObject.creatures()).toHaveLength(3);
        });
    });

    describe("min cr", () => {
        const creatures = [
            CreatureFactory.build({
                challenge: "5",
                name: "Test A"
            }),
            CreatureFactory.build({
                challenge: "5",
                name: "Test B"
            }),
            CreatureFactory.build({
                challenge: "10",
                name: "Test C"
            })
        ];

        test("searches creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            pageObject
                .minCrField()
                .simulate("change", { target: { value: "9" } });

            expect(pageObject.creatures()).toHaveLength(1);
        });
    });

    describe("max cr", () => {
        const creatures = [
            CreatureFactory.build({
                challenge: "5",
                name: "Test B"
            }),
            CreatureFactory.build({
                challenge: "10",
                name: "Test C"
            }),
            CreatureFactory.build({
                challenge: "10",
                name: "Test D"
            })
        ];

        test("searches creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            pageObject
                .maxCrField()
                .simulate("change", { target: { value: "9" } });

            expect(pageObject.creatures()).toHaveLength(1);
        });
    });

    describe("min and max cr", () => {
        const creatures = [
            CreatureFactory.build({
                challenge: "3",
                name: "Test A"
            }),
            CreatureFactory.build({
                challenge: "5",
                name: "Test B"
            }),
            CreatureFactory.build({
                challenge: "7",
                name: "Test C"
            }),
            CreatureFactory.build({
                challenge: "10",
                name: "Test D"
            }),
            CreatureFactory.build({
                challenge: "12",
                name: "Test E"
            })
        ];

        test("searches creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            pageObject
                .minCrField()
                .simulate("change", { target: { value: "6" } });

            pageObject
                .maxCrField()
                .simulate("change", { target: { value: "9" } });

            expect(pageObject.creatures()).toHaveLength(1);
        });
    });

    describe("alignment", () => {
        const creatures = [
            CreatureFactory.build({
                alignment: "Chaotic Good",
                name: "Test A"
            }),
            CreatureFactory.build({
                alignment: "Lawful Evile",
                name: "Test B"
            }),
            CreatureFactory.build({
                alignment: "Lawful Evil",
                name: "Test C"
            })
        ];

        test("renders", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            expect(search.exists()).toBe(true);
        });

        test("renders all creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            expect(pageObject.creatures()).toHaveLength(3);
        });

        test("searches creatures", () => {
            const search = shallow(<CreatureSearch creatures={creatures} />);
            const pageObject = new CreatureSearchPageObject(search);

            pageObject
                .alignmentDropdown()
                .simulate("change", { target: { value: "Chaotic Good" } });

            expect(pageObject.creatures()).toHaveLength(1);
        });
    });
});
