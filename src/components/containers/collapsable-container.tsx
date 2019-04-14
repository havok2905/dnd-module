import React, { Component } from "react";
import { Button } from "../button/button";
import { ICollapsableContainerProps } from "./interfaces/i-collapsable-container-props";
import { ICollapsableContainerState } from "./interfaces/i-collapsable-container-state";

class CollapsableContainer extends Component<
    ICollapsableContainerProps,
    ICollapsableContainerState
> {
    constructor(props: ICollapsableContainerProps) {
        super(props);
        this.state = { display: false };
    }

    private toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }

    render() {
        return (
            <div className="bordered-container">
                <h3 data-qa-target="collapsable-container-title">
                    {this.props.title}
                </h3>
                <Button
                    onClick={this.toggleDisplay.bind(this)}
                    qaTarget="collapsable-container-button"
                    typeStr="button"
                    text="Toggle"
                />
                <div data-qa-target="collapsable-container-children">
                    {this.state.display ? this.props.children : null}
                </div>
            </div>
        );
    }
}

export { CollapsableContainer };
