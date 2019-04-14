import React, { Component } from "react";
import { RollForm } from "../roll-form/roll-form";
import { ImportantButton } from "../button/important-button";
import { Columns } from "../containers/columns";

class Footer extends Component {
    scrollToTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <footer className="footer">
                <Columns>
                    <div>
                        <RollForm />
                    </div>
                    <div>
                        <ImportantButton
                            onClick={this.scrollToTop.bind(this)}
                            qaTarget="scroll-to-top-button"
                            text="Back to Top"
                            typeStr="button"
                        />
                    </div>
                </Columns>
            </footer>
        );
    }
}

export { Footer };
