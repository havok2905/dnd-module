import React from "react";
import PubSub from "pubsub-js";
import { ITableOfContentsProps } from "./interfaces/i-table-of-contents-props";

const TableOfContents = ({
    contentsList,
    hashReferencesSupported
}: ITableOfContentsProps) => {
    return (
        <ol className="table-of-contents-list">
            {contentsList.map((content, index) => {
                return (
                    <li key={index}>
                        <a
                            onClick={e => {
                                PubSub.publish("dm-screen:close");
                                if (!hashReferencesSupported) {
                                    e.preventDefault();
                                    PubSub.publish(content.scrollActionString);
                                }
                            }}
                            href={content.link}
                        >
                            {content.title}
                        </a>
                        {content.children && content.children.length > 0 && (
                            <TableOfContents
                                contentsList={content.children}
                                hashReferencesSupported={
                                    hashReferencesSupported
                                }
                            />
                        )}
                    </li>
                );
            })}
        </ol>
    );
};

TableOfContents.defaultProps = {
    hashReferencesSupported: true
};

export { TableOfContents };
