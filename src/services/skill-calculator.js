const skillCalculator = (skill, baseScore, proficiencyBonus, middleware) => {
    let score = baseScore;

    if (middleware) {
        middleware.forEach(item => {
            score = item.middleware(score, proficiencyBonus, skill);
        });
    }

    if (skill.hasExpertise) {
        score += proficiencyBonus * 2;
    } else if (skill.hasProficiency) {
        score += proficiencyBonus;
    }

    return score;
};

export { skillCalculator };
