import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../src/components/button/button';

storiesOf('Button', module)
  .add('Button', () => {
    return (
        <Button onClick={()=> {}}
                qaTarget='roll-table-button'
                text='Roll'
                type='button'/>
    );
  });