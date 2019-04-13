import { AdvancedItemSearch } from "../../../src/services/advanced-item-search";
import { ItemFactory } from "../../factories/item-factory";

const collection = [
    ItemFactory.build({
        name: "Foo"
    }),
    ItemFactory.build({
        name: "Bar"
    }),
    ItemFactory.build({
        name: "Baz"
    })
];

describe("AdvancedItemSearch", () => {
    test("should return everything if name is not provided", () => {
        const result = AdvancedItemSearch.search(collection, {});
        expect(result).toEqual(collection);
    });

    test("should return everything if name is an empty string", () => {
        const result = AdvancedItemSearch.search(collection, {
            name: ""
        });
        expect(result).toEqual(collection);
    });

    test("should return names that contain the search term", () => {
        const result = AdvancedItemSearch.search(collection, {
            name: "ba"
        });
        expect(result).toEqual([collection[1], collection[2]]);
    });
});
