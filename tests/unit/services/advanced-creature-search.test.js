import { advancedCreatureSearch } from "../../../src/services/advanced-creature-search";

describe("advancedCreatureSearch", () => {
    describe("no options", () => {
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

        test("should return everything if options are not provided", () => {
            const result = advancedCreatureSearch(collection, {});
            expect(result).toEqual(collection);
        });
    });

    describe("name", () => {
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

        test("should return everything if name is an empty string", () => {
            const result = advancedCreatureSearch(collection, {
                name: ""
            });
            expect(result).toEqual(collection);
        });

        test("should return names that contain the search term", () => {
            const result = advancedCreatureSearch(collection, {
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

    describe("type", () => {
        const collection = [
            {
                type: "Foo"
            },
            {
                type: "Bar"
            },
            {
                type: "Baz"
            }
        ];

        test("should return everything if type is an empty string", () => {
            const result = advancedCreatureSearch(collection, {
                type: ""
            });
            expect(result).toEqual(collection);
        });

        test("should return names that contain the search term", () => {
            const result = advancedCreatureSearch(collection, {
                type: "ba"
            });
            expect(result).toEqual([
                {
                    type: "Bar"
                },
                {
                    type: "Baz"
                }
            ]);
        });
    });

    describe("minCr", () => {
        const collection = [
            {
                challenge: "1/8"
            },
            {
                challenge: "1/4"
            },
            {
                challenge: "1/2"
            },
            {
                challenge: "5"
            },
            {
                challenge: "25"
            }
        ];

        test("should return everything if minCR is an empty string", () => {
            const result = advancedCreatureSearch(collection, {
                minCr: ""
            });
            expect(result).toEqual(collection);
        });

        test("should return everything with a cr greater than or equal to the minCr", () => {
            const result = advancedCreatureSearch(collection, {
                minCr: "5"
            });
            expect(result).toEqual([
                {
                    challenge: "5"
                },
                {
                    challenge: "25"
                }
            ]);
        });
    });

    describe("maxCr", () => {
        const collection = [
            {
                challenge: "1/8"
            },
            {
                challenge: "1/4"
            },
            {
                challenge: "1/2"
            },
            {
                challenge: "5"
            },
            {
                challenge: "25"
            }
        ];

        test("should return everything if maxCR is an empty string", () => {
            const result = advancedCreatureSearch(collection, {
                maxCR: ""
            });
            expect(result).toEqual(collection);
        });

        test("should return everything with a cr less than or equal to the maxCR", () => {
            const result = advancedCreatureSearch(collection, {
                maxCr: "5"
            });
            expect(result).toEqual([
                {
                    challenge: "1/8"
                },
                {
                    challenge: "1/4"
                },
                {
                    challenge: "1/2"
                },
                {
                    challenge: "5"
                }
            ]);
        });
    });

    describe("minCr & maxCr", () => {
        const collection = [
            {
                challenge: "1/8"
            },
            {
                challenge: "5"
            },
            {
                challenge: "25"
            }
        ];

        test("should return everything if min and max cr are empty strings", () => {
            const result = advancedCreatureSearch(collection, {
                minCr: "",
                maxCr: ""
            });

            expect(result).toEqual(collection);
        });

        test("should return everything between the crs", () => {
            const result = advancedCreatureSearch(collection, {
                minCr: "1",
                maxCr: "6"
            });

            expect(result).toEqual([
                {
                    challenge: "5"
                }
            ]);
        });
    });

    describe("alignment", () => {
        const collection = [
            {
                alignment: "Unaligned"
            },
            {
                alignment: "Chaotic Good"
            },
            {
                alignment: "Lawful Evil"
            }
        ];

        test("should return everything if alignment is an empty string", () => {
            const result = advancedCreatureSearch(collection, {
                alignment: ""
            });
            expect(result).toEqual(collection);
        });

        test("Should filter with alignment", () => {
            const result = advancedCreatureSearch(collection, {
                alignment: "Unaligned"
            });

            expect(result).toEqual([
                {
                    alignment: "Unaligned"
                }
            ]);
        });
    });

    describe("compound search", () => {
        const collection = [
            {
                type: "Biz",
                name: "Foo"
            },
            {
                type: "Taz",
                name: "Bar"
            },
            {
                type: "Rat",
                name: "Baz"
            }
        ];

        test("Should filter with multiple options", () => {
            const result = advancedCreatureSearch(collection, {
                type: "Ta",
                name: "Ba"
            });

            expect(result).toEqual([
                {
                    type: "Taz",
                    name: "Bar"
                }
            ]);
        });
    });
});