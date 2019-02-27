import { configure } from '@storybook/react';

function loadStories() {
    require('./stories/collapsable-container.story.js');
    require('./stories/columns.story.js');
    require('./stories/container.story.js');
    require('./stories/emphasis-block.story.js');
    require('./stories/monster-block.story.js');
    require('./stories/page.story.js');
    require('./stories/roll-table.story.js');
    require('./stories/table-of-contents.story.js');

    require('./stories/example.story.js');
}

configure(loadStories, module);