export class AbilityScoreCalculator {
    static getModifier(score): number {
        return Math.floor((score - 10) / 2);
    }
}
