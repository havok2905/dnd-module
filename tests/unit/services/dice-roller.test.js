import DiceRoller from '../../../src/services/dice-roller';

describe('AbilityScoreCalculator', ()=> {
    describe('rollDice', ()=> {
        test('should use arguments to make a proper d20 roll', ()=> {
            const spy = jest.spyOn(d20, 'roll');
            DiceRoller.rollDice(1, 8); 
            expect(spy).toHaveBeenCalledWith('1d8');
        });
    });

    describe('raw', ()=> {
        test('should use argument to make a proper d20 roll', ()=> {
            const spy = jest.spyOn(d20, 'roll');
            DiceRoller.raw('1d8+5');
            expect(spy).toHaveBeenCalledWith('1d8+5');
        });
    });
});