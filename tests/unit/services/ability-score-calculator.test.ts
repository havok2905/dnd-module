import AbilityScoreCalculator from '../../../src/services/ability-score-calculator';

describe('AbilityScoreCalculator', ()=> {
    describe('getModifier', ()=> {
        test('should calculate the modifier for the default of 10', ()=> {
            const result = AbilityScoreCalculator.getModifier(10);
            expect(result).toBe(0);
        });

        test('should round down to the closest score', ()=> {
            const result = AbilityScoreCalculator.getModifier(11);
            expect(result).toBe(0);
        });

        test('should return the modifier of a positive value over 10', ()=> {
            const result = AbilityScoreCalculator.getModifier(20);
            expect(result).toBe(5);
        });

        test('should should round down to the closest score of a positive value over 10', ()=> {
            const result = AbilityScoreCalculator.getModifier(19);
            expect(result).toBe(4);
        });

        test('should return the modifier of a positive value under 10', ()=> {
            const result = AbilityScoreCalculator.getModifier(8);
            expect(result).toBe(-1);
        });

        test('should should round down to the closest score of a positive value under 10', ()=> {
            const result = AbilityScoreCalculator.getModifier(7);
            expect(result).toBe(-2);
        });
    });
});