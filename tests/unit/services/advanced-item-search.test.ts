import { AdvancedItemSearch } from "../../../src/services/advanced-item-search";

const collection = [
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
        expect(result).toEqual([
            {
                name: "Bar"
            },
            {
                name: "Baz"
            }
        ]);
    });
});
