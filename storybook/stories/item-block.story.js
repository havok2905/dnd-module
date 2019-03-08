import React from 'react';
import { storiesOf } from '@storybook/react';
import { ItemBlock } from '../../src/components/item-block/item-block';
import { Page } from '../../src/components/page/page';

storiesOf('ItemBlock', module)
  .add('ItemBlock without image', () => {
    return (
        <Page>
            <ItemBlock 
                name='name' 
                rarity='rarity' 
                type='type'
            >
                <p>Child text description</p>
            </ItemBlock>
        </Page>   
    )
  })
  .add('ItemBlock with image', () => {
    return (
        <Page>
            <ItemBlock
                image='https://placekitten.com/900/300'
                name='name' 
                rarity='rarity' 
                type='type'
            >
                <p>Child text description</p>
            </ItemBlock>
        </Page>
    )
});