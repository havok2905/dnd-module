import React, { Component } from "react";
import panzoom from "panzoom";

class PanZoom extends Component {
    private panZoomSection;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        panzoom(this.panZoomSection, {
            maxZoom: 2,
            minZoom: 0.25
        });
    }

    render() {
        return (
            <div className="pan-zoom">
                <div
                    ref={section => {
                        this.panZoomSection = section;
                    }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export { PanZoom };
