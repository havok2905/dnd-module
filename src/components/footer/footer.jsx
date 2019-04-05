import React, { Component } from "react";
import { RollForm } from "../roll-form/roll-form.jsx";
import { ImportantButton } from "../button/important-button.jsx";
import { Columns } from "../containers/columns.jsx";

import "./footer.scss";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    getScrollToTopButton() {
        return (
            <div>
                <ImportantButton
                    onClick={this.scrollToTop.bind(this)}
                    qaTarget="scroll-to-top-button"
                    text="Back to Top"
                    type="Button"
                />
            </div>
        );
    }

    getRollForm() {
        return (
            <div>
                <RollForm />
            </div>
        );
    }

    render() {
        return (
            <footer className="footer">
                <Columns>
                    {this.getRollForm()}
                    {this.getScrollToTopButton()}
                </Columns>
            </footer>
        );
    }
}

export { Footer };
