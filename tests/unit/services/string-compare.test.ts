import { StringCompare } from "../../../src/services/string-compare";

describe("StringCompare", () => {
    describe("doesContainRegardlessOfCase", () => {
        test("Should check if a string is located within another string", () => {
            const a = "BaarfoooooooBarBAZ";
            const b = "FoO";
            const result = StringCompare.doesContainRegardlessOfCase(a, b);
            expect(result).toBe(true);
        });
    });
});
