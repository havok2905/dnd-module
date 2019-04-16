import { IProficiencyInfo } from "./i-proficiency-info";

export interface IAbility {
    name: string;
    type: string;
    modifier: number;
    proficiencyInfo: IProficiencyInfo;
}
