import { ITableOfContentsItem } from "../../table-of-contents/interfaces/i-table-of-contents-item";

export interface IDmScreenProps {
    contentsList: ITableOfContentsItem[];
    hashReferencesSupported: boolean;
}
