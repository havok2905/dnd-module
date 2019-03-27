import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { RollTable } from '../../src/components/roll-table/roll-table';

storiesOf('RollTable', module)
  .addDecorator(withInfo)
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