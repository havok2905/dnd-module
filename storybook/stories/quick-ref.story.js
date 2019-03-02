import React from 'react';
import { storiesOf } from '@storybook/react';
import { QuickRef } from '../../src/components/quick-ref/quick-ref';

storiesOf('QuickRef', module)
    .add('QuickRef', () => {   
        return (
            <QuickRef/>
        );
    });