import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CollapsableContainer } from "../../../src/components/containers/collapsable-container";

Enzyme.configure({ adapter: new Adapter() });

class CollapsableContainerPageObject {
    constructor(component) {
        this.component = component;
    }

    getButton() {
        return this.component.find(
            '[data-qa-target="collapsable-container-button"]'
        );
    }

    getTitle() {
        return this.component
            .find('[data-qa-target="collapsable-container-title"]')
            .text()
            .trim();
    }

    getContentContainer() {
        return this.component
            .find('[data-qa-target="collapsable-container-children"]')
            .children();
    }
}

let collapsableContainer = null;

describe("CollapsableContainer", () => {
    beforeEach(() => {
        collapsableContainer = mount(
            <CollapsableContainer title="Test Container">
                <p>Foo</p>
            </CollapsableContainer>
        );
    });

    test("renders in default state", () => {
        const pageObject = new CollapsableContainerPageObject(
            collapsableContainer
        );

        expect(pageObject.getTitle()).toEqual("Test Container");
        expect(pageObject.getButton()).toHaveLength(1);
        expect(pageObject.getContentContainer()).toHaveLength(0);
    });

    test("it toggles on and off", () => {
        const pageObject = new CollapsableContainerPageObject(
            collapsableContainer
        );

        pageObject.getButton().simulate("click");

        expect(pageObject.getTitle()).toEqual("Test Container");
        expect(pageObject.getButton()).toHaveLength(1);
        expect(pageObject.getContentContainer()).toHaveLength(1);

        pageObject.getButton().simulate("click");

        expect(pageObject.getTitle()).toEqual("Test Container");
        expect(pageObject.getButton()).toHaveLength(1);
        expect(pageObject.getContentContainer()).toHaveLength(0);
    });
});
