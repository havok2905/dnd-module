import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Page } from '../../src/components/page/page';

storiesOf('Page', module)
    .addDecorator(withInfo)
    .add('Page', () => {   
        return (
            <Page>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed varius nisl sed accumsan tincidunt. Pellentesque nibh 
                    elit, vehicula et ipsum in, fringilla accumsan justo. Duis 
                    vel eros vitae augue porta faucibus. Mauris convallis viverra 
                    turpis, pulvinar facilisis dui sollicitudin sit amet. Sed 
                    eget suscipit purus, quis suscipit sem. Praesent in felis 
                    neque. Pellentesque a metus pellentesque, dapibus nisl eu, 
                    luctus erat. Vestibulum leo sapien, iaculis accumsan cursus 
                    vitae, malesuada quis enim. Integer fringilla enim quis 
                    cursus porta. Aenean eget metus vestibulum, faucibus dui 
                    accumsan, fringilla lorem. Quisque ut feugiat elit. Fusce 
                    maximus, ex vel consequat euismod, enim lorem ullamcorper 
                    est, vel tempor turpis leo at elit. Nullam eget augue orci. 
                    Nunc iaculis nisi ut diam elementum, sit amet blandit arcu 
                    sodales. Mauris eget vestibulum est.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed varius nisl sed accumsan tincidunt. Pellentesque nibh 
                    elit, vehicula et ipsum in, fringilla accumsan justo. Duis 
                    vel eros vitae augue porta faucibus. Mauris convallis viverra 
                    turpis, pulvinar facilisis dui sollicitudin sit amet. Sed 
                    eget suscipit purus, quis suscipit sem. Praesent in felis 
                    neque. Pellentesque a metus pellentesque, dapibus nisl eu, 
                    luctus erat. Vestibulum leo sapien, iaculis accumsan cursus 
                    vitae, malesuada quis enim. Integer fringilla enim quis 
                    cursus porta. Aenean eget metus vestibulum, faucibus dui 
                    accumsan, fringilla lorem. Quisque ut feugiat elit. Fusce 
                    maximus, ex vel consequat euismod, enim lorem ullamcorper 
                    est, vel tempor turpis leo at elit. Nullam eget augue orci. 
                    Nunc iaculis nisi ut diam elementum, sit amet blandit arcu 
                    sodales. Mauris eget vestibulum est.
                </p>
            </Page>
        );
    });