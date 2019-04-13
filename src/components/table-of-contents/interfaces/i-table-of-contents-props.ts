import { ITableOfContentsItem } from "./i-table-of-contents-item";

interface ITableOfContentsProps {
    contentsList: ITableOfContentsItem[];
    hashReferencesSupported: boolean;
}

export { ITableOfContentsProps };
