import React, { Component, Fragment } from "react";
import { AdvancedSpellSearch } from "../../services/advanced-spell-search";
import { CollapsableContainer } from "../containers/collapsable-container";
import { Spell } from "../spell/spell";
import { ISpellSearchProps } from "./interfaces/i-spell-search-props";
import { ISpellSearchState } from "./interfaces/i-spell-search-state";

export class SpellSearch extends Component<
    ISpellSearchProps,
    ISpellSearchState
> {
    static defaulProps = {
        spells: []
    };

    constructor(props) {
        super(props);
        this.state = {
            spells: [],
            name: ""
        };
    }

    search() {
        this.setState({
            spells: AdvancedSpellSearch.search(this.props.spells, {
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
                            data-qa-target="spell-search-field"
                            value={this.state.name}
                            onChange={this.handleName.bind(this)}
                            type="text"
                        />
                    </fieldset>
                </form>
                {this.state.spells.map((spell, index) => {
                    return (
                        <CollapsableContainer
                            data-qa-target="spell-search-item"
                            title={spell.name.toUpperCase()}
                            key={index}
                        >
                            <Spell {...spell} />
                        </CollapsableContainer>
                    );
                })}
            </Fragment>
        );
    }
}
