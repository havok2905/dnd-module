import { configure } from "@storybook/react";

import "../src/styles/index.scss";

function loadStories() {
    require("./stories/button.story");
    require("./stories/character-sheet.story");
    require("./stories/collapsable-container.story");
    require("./stories/columns.story");
    require("./stories/compendium.story");
    require("./stories/container.story");
    require("./stories/creatures.story");
    require("./stories/emphasis-block.story");
    require("./stories/footer.story");
    require("./stories/hero.story");
    require("./stories/important-button.story.tsx");
    require("./stories/item-block.story");
    require("./stories/items.story");
    require("./stories/monster-block.story");
    require("./stories/npcs.story");
    require("./stories/page.story");
    require("./stories/pan-zoom.story");
    require("./stories/quick-ref.story");
    require("./stories/roll-form.story");
    require("./stories/roll-table.story");
    require("./stories/spell.story");
    require("./stories/to-top-button.story");
    require("./stories/table-of-contents.story");

    require("./stories/example.story");
}

configure(loadStories, module);
