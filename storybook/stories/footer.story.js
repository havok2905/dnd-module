import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Footer } from '../../src/components/footer/footer';

storiesOf('Footer', module)
    .addDecorator(withInfo)    
    .add('Footer All', () => {
        return (
            <Footer {...{
                quickRefButton: true,
                rollForm: true,
                scrollButton: true
            }}/>
        );
    })
    .add('Footer Some', () => {
        return (
            <Footer {...{
                quickRefButton: true,
                rollForm: false,
                scrollButton: true
            }}/>
        );
    })
    .add('Footer None', () => {
        return (
            <Footer {...{
                quickRefButton: false,
                rollForm: false,
                scrollButton: false
            }}/>
        );
    });