import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Compendium } from "../compendium/compendium";
import { QuickRef } from "../quick-ref/quick-ref";
import { QuickRoll } from "../quick-roll/quick-roll";

const Tools = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Quick Roll</Tab>
                <Tab>Quick Ref</Tab>
                <Tab>Compendium</Tab>
            </TabList>
            <TabPanel>
                <QuickRoll />
            </TabPanel>
            <TabPanel>
                <QuickRef />
            </TabPanel>
            <TabPanel>
                <Compendium />
            </TabPanel>
        </Tabs>
    );
};

export { Tools };
