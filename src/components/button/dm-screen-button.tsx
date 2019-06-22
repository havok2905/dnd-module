import PubSub from "pubsub-js";
import * as React from "react";

const DmScreenButton = () => {
    const handleClick = () => {
        PubSub.publish("dm-screen:open");
    };

    return (
        <button onClick={handleClick} type="button" title="Dm Screen">
            book
        </button>
    );
};

export { DmScreenButton };
