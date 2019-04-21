export interface ISpell {
    name: string;
    rulesText: string;
    higherLevelsText: string;
    level: number;
    school: string;
    ritual: boolean;
    castTime: string;
    range: string;
    components: string[];
    material: string[];
    concentration: boolean;
    duration: string;
    casters: string[];
}
