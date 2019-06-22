import PubSub from "pubsub-js";
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { DmScreen } from "../../src/components/dm-screen/dm-screen";
import { Page } from "../../src/components/page/page";

storiesOf("DmScreen", module)
    .addDecorator(withInfo)
    .add("DmScreen", () => {
        return (
            <Page>
                <button
                    onClick={() => {
                        PubSub.publish("dm-screen:open");
                    }}
                    type="button"
                >
                    Open
                </button>
                <button
                    onClick={() => {
                        PubSub.publish("dm-screen:close");
                    }}
                    type="button"
                >
                    Close
                </button>
                <DmScreen
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
            </Page>
        );
    });
