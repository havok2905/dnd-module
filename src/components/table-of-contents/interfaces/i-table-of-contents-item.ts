interface ITableOfContentsItem {
    title: string;
    link: string;
    children: ITableOfContentsItem[];
    scrollActionString: string;
}

export { ITableOfContentsItem };
