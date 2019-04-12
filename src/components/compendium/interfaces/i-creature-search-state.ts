import { ICreature } from "../../../interfaces/i-creature";

interface ICreatureSearchState {
    creatures: ICreature[];
    name: string;
    type: string;
    minCr: string;
    maxCr: string;
    alignment: string;
}

export { ICreatureSearchState };
