import { AdvancedCreatureSearch } from "../../../src/services/advanced-creature-search";
import { CreatureFactory } from "../../../factories/creature-factory";

describe("AdvancedCreatureSearch", () => {
    describe("no options", () => {
        const collection = [
            CreatureFactory.build({
                name: "Foo"
            }),
            CreatureFactory.build({
                name: "Bar"
            }),
            CreatureFactory.build({
                name: "Baz"
            })
        ];

        test("should return everything if options are not provided", () => {
            const result = AdvancedCreatureSearch.search(collection, {});
            expect(result).toEqual(collection);
        });
    });

    describe("name", () => {
        const collection = [
            CreatureFactory.build({
                name: "Foo"
            }),
            CreatureFactory.build({
                name: "Bar"
            }),
            CreatureFactory.build({
                name: "Baz"
            })
        ];

        test("should return everything if options are not provided", () => {
            const result = AdvancedCreatureSearch.search(collection, {});
            expect(result).toEqual(collection);
        });

        test("should return everything if name is an empty string", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                name: ""
            });
            expect(result).toEqual(collection);
        });

        test("should return names that contain the search term", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                name: "ba"
            });
            expect(result).toEqual([collection[1], collection[2]]);
        });
    });

    describe("type", () => {
        const collection = [
            CreatureFactory.build({
                type: "Foo"
            }),
            CreatureFactory.build({
                type: "Bar"
            }),
            CreatureFactory.build({
                type: "Baz"
            })
        ];

        test("should return everything if options are not provided", () => {
            const result = AdvancedCreatureSearch.search(collection, {});
            expect(result).toEqual(collection);
        });

        test("should return everything if type is an empty string", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                type: ""
            });
            expect(result).toEqual(collection);
        });

        test("should return names that contain the search term", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                type: "ba"
            });
            expect(result).toEqual([collection[1], collection[2]]);
        });
    });

    describe("minCr", () => {
        const collection = [
            CreatureFactory.build({
                challenge: "1/8"
            }),
            CreatureFactory.build({
                challenge: "1/4"
            }),
            CreatureFactory.build({
                challenge: "1/2"
            }),
            CreatureFactory.build({
                challenge: "5"
            }),
            CreatureFactory.build({
                challenge: "25"
            })
        ];

        test("should return everything if minCR is an empty string", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                minCr: ""
            });
            expect(result).toEqual(collection);
        });

        test("should return everything with a cr greater than or equal to the minCr", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                minCr: "5"
            });
            expect(result).toEqual([collection[3], collection[4]]);
        });
    });

    describe("maxCr", () => {
        const collection = [
            CreatureFactory.build({
                challenge: "1/8"
            }),
            CreatureFactory.build({
                challenge: "1/4"
            }),
            CreatureFactory.build({
                challenge: "1/2"
            }),
            CreatureFactory.build({
                challenge: "5"
            }),
            CreatureFactory.build({
                challenge: "25"
            })
        ];

        test("should return everything if maxCR is an empty string", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                maxCr: ""
            });
            expect(result).toEqual(collection);
        });

        test("should return everything with a cr less than or equal to the maxCR", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                maxCr: "5"
            });
            expect(result).toEqual([
                collection[0],
                collection[1],
                collection[2],
                collection[3]
            ]);
        });
    });

    describe("minCr & maxCr", () => {
        const collection = [
            CreatureFactory.build({
                challenge: "1/8"
            }),
            CreatureFactory.build({
                challenge: "5"
            }),
            CreatureFactory.build({
                challenge: "25"
            })
        ];

        test("should return everything if min and max cr are empty strings", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                minCr: "",
                maxCr: ""
            });

            expect(result).toEqual(collection);
        });

        test("should return everything between the crs", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                minCr: "1",
                maxCr: "6"
            });

            expect(result).toEqual([collection[1]]);
        });
    });

    describe("alignment", () => {
        const collection = [
            CreatureFactory.build({
                alignment: "Unaligned"
            }),
            CreatureFactory.build({
                alignment: "Chaotic Good"
            }),
            CreatureFactory.build({
                alignment: "Lawful Evil"
            })
        ];

        test("should return everything if alignment is an empty string", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                alignment: ""
            });
            expect(result).toEqual(collection);
        });

        test("Should filter with alignment", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                alignment: "Unaligned"
            });

            expect(result).toEqual([collection[0]]);
        });
    });

    describe("compound search", () => {
        const collection = [
            CreatureFactory.build({
                type: "Biz",
                name: "Foo"
            }),
            CreatureFactory.build({
                type: "Taz",
                name: "Bar"
            }),
            CreatureFactory.build({
                type: "Rat",
                name: "Baz"
            })
        ];

        test("Should filter with multiple options", () => {
            const result = AdvancedCreatureSearch.search(collection, {
                type: "Ta",
                name: "Ba"
            });

            expect(result).toEqual([collection[1]]);
        });
    });
});
