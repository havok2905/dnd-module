import { AdvancedSpellSearch } from "../../../src/services/advanced-spell-search";
import { SpellFactory } from "../../factories/spell-factory";

const collection = [
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

describe("AdvancedSpellSearch", () => {
    test("should return everything if name is not provided", () => {
        const result = AdvancedSpellSearch.search(collection, {});
        expect(result).toEqual(collection);
    });

    test("should return everything if name is an empty string", () => {
        const result = AdvancedSpellSearch.search(collection, {
            name: ""
        });
        expect(result).toEqual(collection);
    });

    test("should return names that contain the search term", () => {
        const result = AdvancedSpellSearch.search(collection, {
            name: "ba"
        });
        expect(result).toEqual([collection[1], collection[2]]);
    });
});
