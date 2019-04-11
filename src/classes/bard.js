const Bard = {
    name: "Bard",
    levels: [
        {
            level: "1",
            skillScoreMiddleware: []
        },
        {
            level: "2",
            skillScoreMiddleware: [
                {
                    name: "Jack of all Trades",
                    middleware: (score, proficiencyBonus, skill) => {
                        return skill.hasProficiency || skill.hasExpertise
                            ? score
                            : score + Math.floor(proficiencyBonus / 2);
                    }
                }
            ]
        }
    ]
};

export { Bard };
