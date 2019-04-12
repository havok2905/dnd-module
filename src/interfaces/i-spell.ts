interface ISpell {
    name: string;
    rulesText: string;
    higherLevelsText: string;
    level: number;
    school:
        | "Abjuration"
        | "Conjuration"
        | "Divination"
        | "Enchantment"
        | "Evocation"
        | "Illusion"
        | "Necromancy"
        | "Transmutation";
    ritual: Boolean;
    castTime: string;
    range: string;
    components: ["V" | "S" | "M"];
    material: string[];
    concentration: Boolean;
    duration: string;
    casters: string[];
}

export { ISpell };
