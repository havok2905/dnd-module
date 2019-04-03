import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { QuickRef } from "../quick-ref/quick-ref";
import { QuickRoll } from "../quick-roll/quick-roll";

import "./tools.scss";

const Tools = () => {
    return (
        <div className="tools">
            <Tabs>
                <TabList>
                    <Tab>Quick Roll</Tab>
                    <Tab>Quick Ref</Tab>
                </TabList>
                <TabPanel>
                    <QuickRoll />
                </TabPanel>
                <TabPanel>
                    <QuickRef />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export { Tools };
