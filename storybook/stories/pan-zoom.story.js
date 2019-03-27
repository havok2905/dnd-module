import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { PanZoom } from '../../src/components/pan-zoom/pan-zoom';

storiesOf('PanZoom', module)
    .addDecorator(withInfo)
    .add('PanZoom', () => {   
        return (
            <PanZoom>
                <img src='https://placekitten.com/2000/2000'/>
            </PanZoom>
        );
    });