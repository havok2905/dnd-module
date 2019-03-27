import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../../src/components/button/button';

storiesOf('Button', module)
  .addDecorator(withInfo)
  .add('Button', () => {
    return (
        <Button onClick={()=> {}}
                qaTarget='roll-table-button'
                text='Roll'
                type='button'/>
    );
  });