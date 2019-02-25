import { configure } from '@storybook/react';

function loadStories() {
    require('./stories/monster-block.story.js');
    require('./stories/roll-table.story.js');
}

configure(loadStories, module);