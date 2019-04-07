import React, { Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CreatureSearch } from "./creature-search";
import { ItemList } from "./item-list";
import Creatures from "../../creatures/index";
import Npcs from "../../npcs/index";
import Items from "../../items/index";

import "../../styles/components/react-tabs.scss";

const Compendium = () => {
    const creatures = collection => {
        return Object.keys(collection).map(key => {
            const name = key.replace(/_/g, " ").toLowerCase();
            return {
                name,
                ...collection[key]
            };
        });
    };

    const items = collection => {
        return Object.keys(collection).map(key => {
            return collection[key];
        });
    };

    const creatureItems = creatures(Creatures);
    const npcItems = creatures(Npcs);
    const itemItems = items(Items);

    return (
        <Fragment>
            <h3>Compendium</h3>
            <Tabs>
                <TabList data-qa-target="tab-list">
                    <Tab data-qa-target="creatures-tab">Creatures</Tab>
                    <Tab data-qa-target="items-tab">Items</Tab>
                    <Tab data-qa-target="npcs-tab">Npcs</Tab>
                    <Tab data-qa-target="spells-tab">Spells</Tab>
                </TabList>
                <TabPanel data-qa-target="creatures-panel">
                    <h4>Creatures</h4>
                    <CreatureSearch creatures={creatureItems} />
                </TabPanel>
                <TabPanel data-qa-target="items-panel">
                    <h4>Items</h4>
                    <ItemList items={itemItems} />
                </TabPanel>
                <TabPanel data-qa-target="npcs-panel">
                    <h4>Npcs</h4>
                    <CreatureSearch creatures={npcItems} />
                </TabPanel>
                <TabPanel data-qa-target="spells-panel">
                    <h4>Spells</h4>
                </TabPanel>
            </Tabs>
        </Fragment>
    );
};

export { Compendium };
