interface ISpell {
    name: String;
    rulesText: String;
    higherLevelsText: String;
    level: Number;
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
    castTime: String;
    range: String;
    components: ["V" | "S" | "M"];
    material: String[];
    concentration: Boolean;
    duration: String;
    casters: String[];
}

export { ISpell };
