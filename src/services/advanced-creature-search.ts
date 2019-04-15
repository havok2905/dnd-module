import { ICreature } from "../interfaces/i-creature";
import { StringCompare } from "./string-compare";

interface AdvancedCreatureSearchOptions {
    name?: string;
    type?: string;
    alignment?: string;
    minCr?: string;
    maxCr?: string;
}

export class AdvancedCreatureSearch {
    private static parseCrToNum(str: string): number {
        switch (str) {
            case "1/8":
                return 0.125;
            case "1/4":
                return 0.25;
            case "1/2":
                return 0.5;
            default:
                return parseInt(str);
        }
    }

    private static isBetween(a: string, b: string, c: string): boolean {
        const numA = this.parseCrToNum(a);
        const numB = this.parseCrToNum(b);
        const numC = this.parseCrToNum(c);

        return numA >= numB && numA <= numC;
    }

    private static isBelowOrEqual(a: string, b: string): boolean {
        const numA = this.parseCrToNum(a);
        const numB = this.parseCrToNum(b);

        return numA <= numB;
    }

    private static isMoreOrEqual(a: string, b: string): boolean {
        const numA = this.parseCrToNum(a);
        const numB = this.parseCrToNum(b);

        return numA >= numB;
    }

    static search(
        creatures: ICreature[],
        options: AdvancedCreatureSearchOptions
    ) {
        if (
            !options.name &&
            !options.type &&
            !options.alignment &&
            !options.minCr &&
            !options.maxCr
        ) {
            return creatures;
        }

        return creatures.filter(item => {
            let isValid = true;

            if (options.name && options.name.length > 0) {
                if (
                    !StringCompare.doesContainRegardlessOfCase(
                        item.name,
                        options.name
                    )
                ) {
                    isValid = false;
                }
            }

            if (options.type && options.type.length > 0) {
                if (
                    !StringCompare.doesContainRegardlessOfCase(
                        item.type,
                        options.type
                    )
                ) {
                    isValid = false;
                }
            }

            if (options.minCr && !options.maxCr) {
                if (!this.isMoreOrEqual(item.challenge, options.minCr)) {
                    isValid = false;
                }
            }

            if (!options.minCr && options.maxCr) {
                if (!this.isBelowOrEqual(item.challenge, options.maxCr)) {
                    isValid = false;
                }
            }

            if (options.minCr && options.maxCr) {
                if (
                    !this.isBetween(
                        item.challenge,
                        options.minCr,
                        options.maxCr
                    )
                ) {
                    isValid = false;
                }
            }

            if (options.alignment && options.alignment.length > 0) {
                if (item.alignment != options.alignment) {
                    isValid = false;
                }
            }

            return isValid;
        });
    }
}
