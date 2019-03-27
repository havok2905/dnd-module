import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { RollForm } from '../../src/components/roll-form/roll-form';

storiesOf('RollForm', module)
  .addDecorator(withInfo)
  .add('RollForm', () => {
    return (
        <RollForm/>
    );
  });