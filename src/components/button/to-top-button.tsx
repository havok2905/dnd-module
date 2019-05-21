import * as React from "react";

const ToTopButton = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <button
            className="to-top-button"
            data-qa-target="to-top-button"
            onClick={handleClick}
            type="button"
            title="Back to Top"
        >
            arrow_upward
        </button>
    );
};

export { ToTopButton };
