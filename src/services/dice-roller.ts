export class DiceRoller {
    public static roll(str: string): number {
        if (!this.isValid(str)) {
            return;
        }

        const parsed = this.parseString(str);

        return (
            this.calculateRoll(parsed.quantity, parsed.sides) +
            (parsed.bonus || 0)
        );
    }

    private static d20regex = /^\d+\s?(d|D)\s?\d+\s?((\+|\-)\s?\d+)?$/;
    private static parseRegex = /\s|d|\+|\-/;

    private static isValid(str: string): boolean {
        return str.trim().match(this.d20regex) != null;
    }

    private static parseString(str: string) {
        const parsed = str.split(this.parseRegex).filter(i => i);

        const result = {
            quantity: parseInt(parsed[0], 10),
            sides: parseInt(parsed[1], 10),
            bonus: parseInt(parsed[2], 10)
        };

        if (str.includes("-")) {
            result.bonus = result.bonus * -1;
        }

        return result;
    }

    private static calculateRoll(quantity: number, sides: number): number {
        return Math.ceil(Math.random() * sides) * quantity;
    }
}
