import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CreatureSearch } from "../../../src/components/compendium/creature-search";

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
            {
                name: "TEST A",
                type: "Foo"
            },
            {
                name: "TEST B",
                type: "Bar"
            },
            {
                name: "TEST C",
                type: "Baz"
            }
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
            {
                name: "TEST A",
                challenge: "5"
            },
            {
                name: "TEST B",
                challenge: "5"
            },
            {
                name: "TEST C",
                challenge: "10"
            }
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
            {
                name: "TEST A",
                challenge: "5"
            },
            {
                name: "TEST B",
                challenge: "5"
            },
            {
                name: "TEST C",
                challenge: "10"
            }
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
            {
                name: "TEST A",
                challenge: "5"
            },
            {
                name: "TEST B",
                challenge: "10"
            },
            {
                name: "TEST C",
                challenge: "10"
            }
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
            {
                name: "TEST A",
                challenge: "3"
            },
            {
                name: "TEST B",
                challenge: "5"
            },
            {
                name: "TEST C",
                challenge: "7"
            },
            {
                name: "TEST D",
                challenge: "10"
            },
            {
                name: "TEST E",
                challenge: "12"
            }
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
            {
                name: "TEST A",
                alignment: "Chaotic Good"
            },
            {
                name: "TEST B",
                challenge: "Lawful Evil"
            },
            {
                name: "TEST C",
                challenge: "Lawful Evil"
            }
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
