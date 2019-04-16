import { IProficiencyInfo } from "./i-proficiency-info";

export interface IStat {
    title: string;
    modifier: number;
    score?: number;
    proficiencyInfo: IProficiencyInfo;
}
