/* global d20 */

import 'd20';

const DiceRoller = {
    rollDice(quantity, sides) {
        return d20.roll(`${quantity}d${sides}`);
    },

    raw(str) {
        return d20.roll(str);
    }
};

export default DiceRoller;