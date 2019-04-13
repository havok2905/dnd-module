import { DiceRoller } from "../../../src/services/dice-roller";

describe("DiceRoller", () => {
    describe("roll", () => {
        beforeEach(() => {
            const mockMath = Object.create(global.Math);
            mockMath.random = () => 0.5;
            global.Math = mockMath;
        });

        test("should use argument to make a proper d20 roll", () => {
            const result = DiceRoller.roll("1d8+5");
            expect(result).toEqual(9);
        });
    });
});
