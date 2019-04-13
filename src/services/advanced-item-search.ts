import { IItem } from "../interfaces/i-item";

interface IAdvancedItemSearchOptions {
    name?: string;
}

export class AdvancedItemSearch {
    private static stringCompare(a: string, b: string): boolean {
        a = a.trim().toLowerCase();
        b = b.trim().toLowerCase();
        return a.includes(b);
    }

    static search(
        items: IItem[],
        options: IAdvancedItemSearchOptions
    ): IItem[] {
        if (!options.name) {
            return items;
        }

        return items.filter(item => {
            let isValid = true;

            if (options.name && options.name.length > 0) {
                if (!this.stringCompare(item.name, options.name)) {
                    isValid = false;
                }
            }

            return isValid;
        });
    }
}
