import React from "react";
import { IScrollToMeProps } from "./interfaces/i-scroll-to-me-props";
import PubSub from "pubsub-js";

const ScrollToMe = ({ children, scrollActionString }: IScrollToMeProps) => {
    return (
        <div
            ref={section => {
                PubSub.subscribe(scrollActionString, () => {
                    section.scrollIntoView();
                });
            }}
        >
            {children}
        </div>
    );
};

export { ScrollToMe };
