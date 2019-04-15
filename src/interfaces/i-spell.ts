export interface ISpell {
    name: string;
    rulesText: string;
    higherLevelsText: string;
    level: number;
    school: string;
    ritual: Boolean;
    castTime: string;
    range: string;
    components: string[];
    material: string[];
    concentration: Boolean;
    duration: string;
    casters: string[];
}
