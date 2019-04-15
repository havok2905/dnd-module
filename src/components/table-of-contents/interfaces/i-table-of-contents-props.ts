import { ITableOfContentsItem } from "./i-table-of-contents-item";

export interface ITableOfContentsProps {
    contentsList: ITableOfContentsItem[];
    hashReferencesSupported: boolean;
}
