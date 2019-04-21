import { ISpell } from "../interfaces/i-spell";
import { StringCompare } from "./string-compare";

interface IAdvancedSpellSearchOptions {
    name?: string;
}

export class AdvancedSpellSearch {
    public static search(
        spells: ISpell[],
        options: IAdvancedSpellSearchOptions
    ): ISpell[] {
        if (!options.name) {
            return spells;
        }

        return spells.filter(spell => {
            let isValid = true;

            if (options.name && options.name.length > 0) {
                if (
                    !StringCompare.doesContainRegardlessOfCase(
                        spell.name,
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
