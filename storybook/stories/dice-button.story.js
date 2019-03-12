import React from 'react';
import { storiesOf } from '@storybook/react';
import { DiceButton } from '../../src/components/dice-button/dice-button';

storiesOf('DiceButton', module)
  .add('DiceButton', () => {
    return <DiceButton/>
  });