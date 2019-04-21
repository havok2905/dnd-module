import * as Factory from "factory.ts";

import { IItem } from "../src/interfaces/i-item";

export const ItemFactory = Factory.Sync.makeFactory<IItem>({
    name: "Item",
    rarity: "Common",
    type: "Magic",
    description: "It does a thing...with magic!"
});
