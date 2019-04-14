import React, { Component, Fragment } from "react";
import { AdvancedCreatureSearch } from "../../services/advanced-creature-search";
import { CollapsableContainer } from "../containers/collapsable-container";
import { MonsterBlock } from "../monster-block/monster-block";
import { ICreatureSearchState } from "./interfaces/i-creature-search-state";
import { ICreatureSearchProps } from "./interfaces/i-creature-search-props";

class CreatureSearch extends Component<
    ICreatureSearchProps,
    ICreatureSearchState
> {
    static defaultProps = {
        creatures: []
    };

    constructor(props) {
        super(props);

        this.state = {
            creatures: [],
            name: "",
            type: "",
            minCr: "",
            maxCr: "",
            alignment: ""
        };
    }

    search() {
        this.setState({
            creatures: AdvancedCreatureSearch.search(this.props.creatures, {
                name: this.state.name,
                type: this.state.type,
                minCr: this.state.minCr,
                maxCr: this.state.maxCr,
                alignment: this.state.alignment
            })
        });
    }

    handleName(e) {
        this.setState({ name: e.target.value }, this.search);
    }

    handleType(e) {
        this.setState({ type: e.target.value }, this.search);
    }

    handleMinCr(e) {
        this.setState({ minCr: e.target.value }, this.search);
    }

    handleMaxCr(e) {
        this.setState({ maxCr: e.target.value }, this.search);
    }

    handleAlignment(e) {
        this.setState({ alignment: e.target.value }, this.search);
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
                            data-qa-target="creature-search-name-field"
                            value={this.state.name}
                            onChange={this.handleName.bind(this)}
                            type="text"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Min CR</label>
                        <input
                            data-qa-target="creature-search-min-cr-field"
                            value={this.state.minCr}
                            onChange={this.handleMinCr.bind(this)}
                            type="text"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Max CR</label>
                        <input
                            data-qa-target="creature-search-max-cr-field"
                            value={this.state.maxCr}
                            onChange={this.handleMaxCr.bind(this)}
                            type="text"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Type</label>
                        <input
                            data-qa-target="creature-search-type-field"
                            value={this.state.type}
                            onChange={this.handleType.bind(this)}
                            type="text"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Alignment</label>
                        <select
                            data-qa-target="creature-search-alignment-dropdown"
                            onChange={this.handleAlignment.bind(this)}
                            value={this.state.alignment}
                        >
                            <option value="" />
                            <option value="Lawful Good">Lawful Good</option>
                            <option value="Neutral Good">Neutral Good</option>
                            <option value="Chaotic Good">Chaotic Good</option>
                            <option value="Lawful Neutral">
                                Lawful Neutral
                            </option>
                            <option value="Neutral">Neutral</option>
                            <option value="Chaotic Neutral">
                                Chaotic Neutral
                            </option>
                            <option value="Lawful Evil">Lawful Evil</option>
                            <option value="Neutral Evil">Neutral Evil</option>
                            <option value="Chaotic Evil">Chaotic Evil</option>
                            <option value="Unaligned">Unaligned</option>
                        </select>
                    </fieldset>
                </form>
                {this.state.creatures.map((item, index) => {
                    return (
                        <CollapsableContainer
                            data-qa-target="creatures-list"
                            title={item.name.toUpperCase()}
                            key={index}
                        >
                            <MonsterBlock {...item} />
                        </CollapsableContainer>
                    );
                })}
            </Fragment>
        );
    }
}

export { CreatureSearch };
