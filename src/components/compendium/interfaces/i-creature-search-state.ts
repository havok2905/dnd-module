import { ICreature } from "../../../interfaces/i-creature";

export interface ICreatureSearchState {
    creatures: ICreature[];
    name: string;
    type: string;
    minCr: string;
    maxCr: string;
    alignment: string;
}
