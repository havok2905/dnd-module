import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Spell } from "../../../src/components/spell/spell";
import { SpellFactory } from "../../factories/spell-factory";

Enzyme.configure({ adapter: new Adapter() });

class SpellPageObject {
    private component;

    constructor(component) {
        this.component = component;
    }

    getLevelSchool() {
        return this.component.find("[data-qa-target='level-school']");
    }

    getCasters() {
        return this.component.find("[data-qa-target='casters']");
    }

    getConcentration() {
        return this.component.find("[data-qa-target='concentration']");
    }

    getComponents() {
        return this.component.find("[data-qa-target='components']");
    }

    getRitual() {
        return this.component.find("[data-qa-target='ritual']");
    }

    getMaterials() {
        return this.component.find("[data-qa-target='materials']");
    }
}

const defaultData = SpellFactory.build({
    name: "Firebolt",
    rulesText:
        "You hurl a small flame at a creature or object, making a ranged spell attack. The target takes 1d10 fire damage on hit. The fire ignites any flammable object hit by it that isn't being worn or carried.",
    level: 1,
    school: "Evocation",
    castTime: "1 Action",
    range: "120 ft.",
    components: ["V", "S"],
    duration: "Instantaneous",
    casters: ["Sorcerers", "Wizards"]
});

describe("Spell", () => {
    test("renders default", () => {
        const quickRef = shallow(<Spell {...defaultData} />);
        const pageObject = new SpellPageObject(quickRef);

        expect(
            pageObject
                .getCasters()
                .text()
                .trim()
        ).toEqual("Sorcerers, Wizards");

        expect(
            pageObject
                .getLevelSchool()
                .text()
                .trim()
        ).toEqual("Evocation, Level 1");

        expect(
            pageObject
                .getConcentration()
                .text()
                .trim()
        ).toEqual("No Concentration");

        expect(
            pageObject
                .getComponents()
                .text()
                .trim()
        ).toEqual("V, S");

        expect(
            pageObject
                .getRitual()
                .text()
                .trim()
        ).toEqual("No Ritual");

        expect(pageObject.getMaterials()).toHaveLength(0);
    });

    test("It handles cantrip", () => {
        const data = { ...defaultData };

        data.level = 0;

        const quickRef = shallow(<Spell {...data} />);
        const pageObject = new SpellPageObject(quickRef);

        expect(
            pageObject
                .getLevelSchool()
                .text()
                .trim()
        ).toEqual("Evocation, Cantrip");
    });

    test("It handles concentration", () => {
        const data = { ...defaultData };

        data.concentration = true;

        const quickRef = shallow(<Spell {...data} />);
        const pageObject = new SpellPageObject(quickRef);

        expect(
            pageObject
                .getConcentration()
                .text()
                .trim()
        ).toEqual("Concentration");
    });

    test("It handles ritual", () => {
        const data = { ...defaultData };

        data.ritual = true;

        const quickRef = shallow(<Spell {...data} />);
        const pageObject = new SpellPageObject(quickRef);

        expect(
            pageObject
                .getRitual()
                .text()
                .trim()
        ).toEqual("Ritual");
    });

    test("It handles materials", () => {
        const data = { ...defaultData };

        data.material = ["foo", "bar"];

        const quickRef = shallow(<Spell {...data} />);
        const pageObject = new SpellPageObject(quickRef);
        const materials = pageObject.getMaterials();

        expect(materials).toHaveLength(1);
    });
});
