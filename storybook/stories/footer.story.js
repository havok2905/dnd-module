import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '../../src/components/footer/footer';

storiesOf('Footer', module)
  .add('Footer', () => {
    return (
        <Footer/>
    );
  });