import React, { Component, Fragment } from "react";
import { AdvancedItemSearch } from "../../services/advanced-item-search";
import { CollapsableContainer } from "../containers/collapsable-container";
import { ItemBlock } from "../item-block/item-block";
import { IItemListState } from "./interfaces/i-item-list-state";
import { IItemListProps } from "./interfaces/i-item-list-props";

class ItemList extends Component<IItemListProps, IItemListState> {
    static defaulProps = {
        items: []
    };

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            name: ""
        };
    }

    search() {
        this.setState({
            items: AdvancedItemSearch.search(this.props.items, {
                name: this.state.name
            })
        });
    }

    handleName(e) {
        this.setState({ name: e.target.value }, this.search);
    }

    componentDidMount() {
        this.search();
    }

    render() {
        return (
            <Fragment>
                <form className="form">
                    <fieldset>
                        <label>Name</label>
                        <input
                            data-qa-target="item-list-search-field"
                            value={this.state.name}
                            onChange={this.handleName.bind(this)}
                            type="text"
                        />
                    </fieldset>
                </form>
                {this.state.items.map((item, index) => {
                    return (
                        <CollapsableContainer
                            data-qa-target="item-list-item"
                            title={item.name.toUpperCase()}
                            key={index}
                        >
                            <ItemBlock {...item}>{item.description}</ItemBlock>
                        </CollapsableContainer>
                    );
                })}
            </Fragment>
        );
    }
}

export { ItemList };
