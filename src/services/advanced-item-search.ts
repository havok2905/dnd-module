import { IItem } from "../interfaces/i-item";
import { StringCompare } from "./string-compare";

interface IAdvancedItemSearchOptions {
    name?: string;
}

export class AdvancedItemSearch {
    public static search(
        items: IItem[],
        options: IAdvancedItemSearchOptions
    ): IItem[] {
        if (!options.name) {
            return items;
        }

        return items.filter(item => {
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

            return isValid;
        });
    }
}
