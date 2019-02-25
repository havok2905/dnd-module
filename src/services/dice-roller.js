import 'd20';

const DiceRoller = {
    rollDice(quantity, sides) {
        return d20.roll(`${quantity}d${sides}`);
    }
};

export default DiceRoller;