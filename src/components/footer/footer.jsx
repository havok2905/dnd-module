import React, { Component } from "react";
import { RollForm } from "../roll-form/roll-form.jsx";
import { Button } from "../button/button.jsx";
import { Columns } from "../containers/columns.jsx";

import "./footer.scss";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    getScrollToTopButton() {
        return (
            <div>
                <Button
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
