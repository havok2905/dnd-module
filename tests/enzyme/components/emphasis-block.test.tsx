import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { EmphasisBlock } from "../../../src/components/emphasis-block/emphasis-block";

Enzyme.configure({ adapter: new Adapter() });

describe("EmphasisBlock", () => {
    test("renders children", () => {
        const emphasisBlock = mount(
            <EmphasisBlock>
                <p>Foo</p>
            </EmphasisBlock>
        );
        expect(emphasisBlock.children()).toHaveLength(1);
    });
});
