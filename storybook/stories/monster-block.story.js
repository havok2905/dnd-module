import React from 'react';
import { storiesOf } from '@storybook/react';
import { MonsterBlock } from '../../src/components/monster-block/monster-block';

storiesOf('Monster Block', module)
  .add('Monster Block', () => {
    return (
      <MonsterBlock
        ac={10}
        actions={[
          {
            title: 'Test Attack',
            description: 'It does a thing. See? It does a thing!!!'
          }
        ]}
        alignment='Chaotic Good'
        challenge='1'
        description="I'm a test creature"
        features={[
          {
            title: 'Test Feature',
            description: 'It does a thing. See? It does a thing!!!'
          }
        ]}
        hp={100}
        image='https://placekitten.com/900/300'
        languages={['Common']}
        senses={['Passive Perception 10']}
        size='Medium'
        speed='30 ft.'
        stats={{
          str: 10,
          dex: 10,
          con: 10,
          int: 10,
          wis: 10,
          cha: 10
        }}
        title='Test Monster'
        type='Humanoid'
      />
    )
  });