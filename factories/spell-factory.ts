import * as Factory from "factory.ts";

import { ISpell } from "../src/interfaces/i-spell";

export const SpellFactory = Factory.Sync.makeFactory<ISpell>({
    name: "Test Spell",
    rulesText: "It makes magic happen.",
    school: "Evocation",
    higherLevelsText: "It does things at higher levels",
    level: 3,
    ritual: false,
    range: "60ft.",
    castTime: "Instant",
    casters: [],
    components: [],
    material: [],
    concentration: false,
    duration: "1 Hour"
});
