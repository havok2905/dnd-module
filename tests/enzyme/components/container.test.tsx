import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Container } from "../../../src/components/containers/container";

Enzyme.configure({ adapter: new Adapter() });

class ContainerPageObject {
    private component;

    constructor(component) {
        this.component = component;
    }

    getContent() {
        return this.component.find(".bordered-container");
    }
}

let container = null;
let pageObject = null;

describe("Container", () => {
    beforeEach(() => {
        container = mount(
            <Container>
                <p>Foo</p>
            </Container>
        );
        pageObject = new ContainerPageObject(container);
    });

    test("renders children", () => {
        expect(pageObject.getContent().children()).toHaveLength(1);
    });
});
