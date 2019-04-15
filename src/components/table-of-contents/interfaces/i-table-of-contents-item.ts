export interface ITableOfContentsItem {
    title: string;
    link: string;
    children: ITableOfContentsItem[];
    scrollActionString?: string;
}
