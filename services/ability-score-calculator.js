const AbilityScoreCalculator = {
    getModifier(score) {
        return Math.floor((score - 10 ) / 2);
    }
};

export default AbilityScoreCalculator;