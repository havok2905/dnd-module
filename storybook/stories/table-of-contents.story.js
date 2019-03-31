import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Page } from "../../src/components/page/page";
import { ScrollToMe } from "../../src/components/scroll-to-me/scroll-to-me";
import { TableOfContents } from "../../src/components/table-of-contents/table-of-contents";

storiesOf("TableOfContents", module)
    .addDecorator(withInfo)
    .add("TableOfContents", () => {
        return (
            <Page>
                <TableOfContents
                    hashReferencesSupported={false}
                    contentsList={[
                        {
                            title: "1",
                            link: "#",
                            scrollActionString: "scroll-to-me-test",
                            children: [
                                {
                                    title: "1A",
                                    link: "#",
                                    children: []
                                },
                                {
                                    title: "1B",
                                    link: "#",
                                    children: [
                                        {
                                            title: "1BA",
                                            link: "#",
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    title: "1C",
                                    link: "#",
                                    children: []
                                }
                            ]
                        }
                    ]}
                />
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <ScrollToMe scrollActionString="scroll-to-me-test">
                    <p>SCROLL TO ME</p>
                </ScrollToMe>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
                <p>Filler</p>
            </Page>
        );
    });
