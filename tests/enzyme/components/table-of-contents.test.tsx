import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TableOfContents } from "../../../src/components/table-of-contents/table-of-contents";

Enzyme.configure({ adapter: new Adapter() });

let tableOfContents = null;

const contentsList = [
    {
        title: "A",
        link: "#A",
        children: [
            {
                title: "AA",
                link: "#AA",
                children: [
                    {
                        title: "AAA",
                        link: "#AAA",
                        children: []
                    }
                ]
            }
        ]
    }
];

describe("TableOfContentsPageObject", () => {
    beforeEach(() => {
        tableOfContents = mount(
            <TableOfContents contentsList={contentsList} />
        );
    });

    test("renders a nested table of contents", () => {
        const first = tableOfContents.find("ol").first();
        const firstLink = first.find("a").first();

        const second = tableOfContents.find("ol ol").first();
        const secondLink = second.find("a").first();

        const third = tableOfContents.find("ol ol ol").first();
        const thirdLink = third.find("a").first();

        expect(firstLink.text().trim()).toBe("A");
        expect(firstLink.is('[href="#A"]')).toBe(true);

        expect(secondLink.text().trim()).toBe("AA");
        expect(secondLink.is('[href="#AA"]')).toBe(true);

        expect(thirdLink.text().trim()).toBe("AAA");
        expect(thirdLink.is('[href="#AAA"]')).toBe(true);
    });
});
