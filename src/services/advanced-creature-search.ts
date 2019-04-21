import { ICreature } from "../interfaces/i-creature";
import { StringCompare } from "./string-compare";

interface IAdvancedCreatureSearchOptions {
    name?: string;
    type?: string;
    alignment?: string;
    minCr?: string;
    maxCr?: string;
}

export class AdvancedCreatureSearch {
    public static search(
        creatures: ICreature[],
        options: IAdvancedCreatureSearchOptions
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

            isValid = this.doesContainRegardlessOfCase(
                item.name,
                options.name,
                isValid
            );

            isValid = this.doesContainRegardlessOfCase(
                item.type,
                options.type,
                isValid
            );

            isValid = this.isMoreOrEqual(
                item.challenge,
                options.minCr,
                isValid
            );

            isValid = this.isBelowOrEqual(
                item.challenge,
                options.maxCr,
                isValid
            );

            isValid = this.isBetween(
                item.challenge,
                options.minCr,
                options.maxCr,
                isValid
            );

            isValid = this.areAlignmentsEqual(
                options.alignment,
                item.alignment,
                isValid
            );

            return isValid;
        });
    }

    private static doesContainRegardlessOfCase(
        a: string,
        b: string,
        isValid: boolean
    ) {
        if (a && a.length > 0 && b && b.length > 0) {
            isValid = StringCompare.doesContainRegardlessOfCase(a, b);
        }

        return isValid;
    }

    private static areAlignmentsEqual(
        a: string,
        b: string,
        isValid: boolean
    ): boolean {
        if (a && a.length > 0 && b && b.length > 0) {
            if (a !== b) {
                isValid = false;
            }
        }

        return isValid;
    }

    private static parseCrToNum(str: string): number {
        switch (str) {
            case "1/8":
                return 0.125;
            case "1/4":
                return 0.25;
            case "1/2":
                return 0.5;
            default:
                return parseInt(str, 10);
        }
    }

    private static isBetween(
        a: string,
        b: string,
        c: string,
        isValid: boolean
    ): boolean {
        if (b && c) {
            const numA = this.parseCrToNum(a);
            const numB = this.parseCrToNum(b);
            const numC = this.parseCrToNum(c);

            isValid = numA >= numB && numA <= numC;
        }

        return isValid;
    }

    private static isBelowOrEqual(
        a: string,
        b: string,
        isValid: boolean
    ): boolean {
        if (a && b) {
            const numA = this.parseCrToNum(a);
            const numB = this.parseCrToNum(b);

            isValid = numA <= numB;
        }

        return isValid;
    }

    private static isMoreOrEqual(
        a: string,
        b: string,
        isValid: boolean
    ): boolean {
        if (a && b) {
            const numA = this.parseCrToNum(a);
            const numB = this.parseCrToNum(b);

            isValid = numA >= numB;
        }

        return isValid;
    }
}
