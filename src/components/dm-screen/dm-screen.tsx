import PropTypes from "prop-types";
import PubSub from "pubsub-js";
import React, { Component, Fragment } from "react";
import { Page } from "../page/page";
import { TableOfContents } from "../table-of-contents/table-of-contents";
import { Tools } from "../tools/tools";
import { IDmScreenProps } from "./interfaces/i-dm-screen-props";
import { IDmScreenState } from "./interfaces/i-dm-screen-state";

class DmScreen extends Component<IDmScreenProps, IDmScreenState> {
    static propTypes = {
        contentsList: PropTypes.arrayOf(PropTypes.object),
        hashReferencesSupported: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    closeDmScreen = (): void => {
        this.setState({ display: false });
    };

    openDmScreen = (): void => {
        this.setState({ display: true });
    };

    getTableOfContents(): any {
        const { contentsList, hashReferencesSupported } = this.props;

        if (contentsList && hashReferencesSupported !== null) {
            return (
                <Fragment>
                    <h2>Table of Contents</h2>
                    <TableOfContents
                        contentsList={contentsList}
                        hashReferencesSupported={hashReferencesSupported}
                    />
                </Fragment>
            );
        }

        return null;
    }

    getTools(): any {
        return (
            <Fragment>
                <h2>Tools</h2>
                <Tools />
            </Fragment>
        );
    }

    componentDidMount() {
        PubSub.subscribe("dm-screen:close", this.closeDmScreen);
        PubSub.subscribe("dm-screen:open", this.openDmScreen);
    }

    render() {
        if (!this.state.display) return null;

        return (
            <div className="dm-screen">
                <Page>
                    <div
                        className="dm-screen__close-button"
                        onClick={this.closeDmScreen}
                    >
                        X
                    </div>
                    {this.getTableOfContents()}
                    {this.getTools()}
                </Page>
            </div>
        );
    }
}

export { DmScreen };
