import React from 'react';
import { storiesOf } from '@storybook/react';
import { RollForm } from '../../src/components/roll-form';

storiesOf('RollForm', module)
  .add('RollForm', () => {
    return (
        <RollForm/>
    );
  });