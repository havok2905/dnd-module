import React from 'react';
import { storiesOf } from '@storybook/react';
import { RollTable } from '../../src/components/roll-table';

storiesOf('RollTable', module)
  .add('RollTable', () => {
    return (
      <RollTable
        title='Test Roll Table'
        items={[
            {
                rollRange:[1,10],
                description: 'Foo'
            },
            {
                rollRange:[11],
                description: 'Bar'
            },
            {
                rollRange:[12,13],
                description: 'Baz'
            }
        ]}
      />
    )
  });