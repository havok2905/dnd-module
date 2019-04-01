const movement = [
    {
        title: "Move",
        description: "Cost: 5ft per 5ft"
    },
    {
        title: "Drop Prone",
        description: "Cost: 0ft"
    },
    {
        title: "High Jump",
        description: "Cost: 5ft per 5ft"
    },
    {
        title: "Difficult Terrain",
        description: "Cost modifier: +5ft per 5ft"
    },
    {
        title: "Climb",
        description: "Cost: 10ft per 5ft"
    },
    {
        title: "Crawl",
        description: "Cost: 10ft per 5ft"
    },
    {
        title: "Long Jump",
        description: "Cost: 5ft per 5ft"
    },
    {
        title: "Grapple Move",
        description: "Modifier: speed halved"
    },
    {
        title: "Swim",
        description: "Cost: 10ft per 5ft"
    },
    {
        title: "Stand Up",
        description: "Cost: half movement speed"
    },
    {
        title: "Improvise",
        description: "Any stunt not on this list"
    }
];

const action = [
    {
        title: "Attack",
        description: "Melee or ranged attack"
    },
    {
        title: "Shove",
        description: "Special melee attack"
    },
    {
        title: "Dash",
        description: "Double movement speed"
    },
    {
        title: "Dodge",
        description: "Increases defenses"
    },
    {
        title: "Help",
        description: "Grant an ally advantage"
    },
    {
        title: "Use Shield",
        description: "Equip or unequip a shield"
    },
    {
        title: "Search",
        description: "Conduct a search"
    },
    {
        title: "USe Class Feature",
        description: "Some features use actions"
    },
    {
        title: "Grapple",
        description: "Special melee attack"
    },
    {
        title: "Cast a Spell",
        description: "Cast time of 1 action"
    },
    {
        title: "Disengage",
        description: "Prevent opportunity attacks"
    },
    {
        title: "Escape",
        description: "Escape a grapple"
    },
    {
        title: "Use Object",
        description: "Interact, use special abilities"
    },
    {
        title: "Hide",
        description: "Make a hide"
    },
    {
        title: "Ready",
        description: "Choose trigger and action"
    },
    {
        title: "Improvise",
        description: "Any action not on this list"
    }
];

const bonusAction = [
    {
        title: "Offhand Attack",
        description: "Use with the Attack action"
    },
    {
        title: "Use a class feature",
        description: "Some features use bonus actions"
    },
    {
        title: "Cast a Spell",
        description: "Cast time of 1 action"
    }
];

const reaction = [
    {
        title: "Opportunity Attack",
        description: "Enemy leaves your reach"
    },
    {
        title: "Readied Action",
        description: "Part of your Ready action"
    },
    {
        title: "Cast a Spell",
        description: "Cast time of 1 reaction"
    }
];

const condition = [
    {
        title: "Blinded",
        description: "You can't see"
    },
    {
        title: "Exhaustion",
        description: "You are exhausted"
    },
    {
        title: "Incapacitated",
        description: "You can't take actions or reactions"
    },
    {
        title: "Petrified",
        description: "You are transformed into stone"
    },
    {
        title: "Restrained",
        description: "You are restrained"
    },
    {
        title: "Charmed",
        description: "You are charmed"
    },
    {
        title: "Frightened",
        description: "You are frightened"
    },
    {
        title: "Invisible",
        description: "You can't be seen"
    },
    {
        title: "Poisoned",
        description: "You are poisoned"
    },
    {
        title: "Stunned",
        description: "You are stunned"
    },
    {
        title: "Deafened",
        description: "You can't hear"
    },
    {
        title: "Grappled",
        description: "You are grappled"
    },
    {
        title: "Paralyzed",
        description: "You are paralyzed"
    },
    {
        title: "Prone",
        description: "You are prone"
    },
    {
        title: "Unconscious",
        description: "You are unconscious"
    }
];

const environmentalEffects = [
    {
        title: "Lightly obscured",
        description: "Disadvantage on perception"
    },
    {
        title: "Heavily obscured",
        description: "Effectively blind"
    },
    {
        title: "Bright light",
        description: "Normal vision"
    },
    {
        title: "Dim Light",
        description: "Lightly obscured"
    },
    {
        title: "Darkness",
        description: "Heavily Obscured"
    },
    {
        title: "Blindsight",
        description: "Perceive without sight"
    },
    {
        title: "Darkvision",
        description: "Limited vision in darkness"
    },
    {
        title: "Truesight",
        description: "See in darkness"
    },
    {
        title: "Half cover",
        description: "Low wall, furniture"
    },
    {
        title: "Three quarters cover",
        description: "Portcullis, arrow slit"
    },
    {
        title: "Full cover",
        description: "completely concealed"
    }
];

export {
    movement,
    action,
    bonusAction,
    reaction,
    condition,
    environmentalEffects
};
