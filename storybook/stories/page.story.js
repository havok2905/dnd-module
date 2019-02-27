import React from 'react';
import { storiesOf } from '@storybook/react';
import EmphasisBlock from '../../src/components/emphasis-block';
import MonsterBlock from '../../src/components/monster-block';
import RollTable from '../../src/components/roll-table';
import '../../src/styles/components/page.scss';
import CollapsableContainer from '../../src/components/collapsable-container';

storiesOf('Page', module)
  .add('Page', () => {   
    return (
        <article className='page'>
            <h1>Module Name</h1>
            <h2>Chapter 1</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nisl sed accumsan tincidunt. Pellentesque nibh elit, vehicula et ipsum in, fringilla accumsan justo. Duis vel eros vitae augue porta faucibus. Mauris convallis viverra turpis, pulvinar facilisis dui sollicitudin sit amet. Sed eget suscipit purus, quis suscipit sem. Praesent in felis neque. Pellentesque a metus pellentesque, dapibus nisl eu, luctus erat. Vestibulum leo sapien, iaculis accumsan cursus vitae, malesuada quis enim. Integer fringilla enim quis cursus porta. Aenean eget metus vestibulum, faucibus dui accumsan, fringilla lorem. Quisque ut feugiat elit. Fusce maximus, ex vel consequat euismod, enim lorem ullamcorper est, vel tempor turpis leo at elit. Nullam eget augue orci. Nunc iaculis nisi ut diam elementum, sit amet blandit arcu sodales. Mauris eget vestibulum est.
            </p>
            <RollTable
                title='Roll Table'
                items={[
                    {
                        rollRange:[1,10],
                        description: 'Foo'
                    },
                    {
                        rollRange:[11],
                        description: 'Bar'
                    },
                    {
                        rollRange:[12,13],
                        description: 'Baz'
                    }
                ]}
            />
            <CollapsableContainer title='Test Monster'>
                <MonsterBlock
                    ac={10}
                    actions={[
                    {
                        title: 'Test Attack',
                        description: 'It does a thing. See? It does a thing!!!'
                    }
                    ]}
                    alignment='Chaotic Good'
                    challenge='1'
                    description="I'm a test creature"
                    features={[
                    {
                        title: 'Test Feature',
                        description: 'It does a thing. See? It does a thing!!!'
                    }
                    ]}
                    hp={100}
                    languages={['Common']}
                    senses={['Passive Perception 10']}
                    size='Medium'
                    speed='30 ft.'
                    stats={{
                        str: 10,
                        dex: 10,
                        con: 10,
                        int: 10,
                        wis: 10,
                        cha: 10
                    }}
                    type='Humanoid'
                />
            </CollapsableContainer>
            <h2>Chapter 2</h2>
            <EmphasisBlock>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nisl sed accumsan tincidunt. Pellentesque nibh elit, vehicula et ipsum in, fringilla accumsan justo. Duis vel eros vitae augue porta faucibus. Mauris convallis viverra turpis, pulvinar facilisis dui sollicitudin sit amet. Sed eget suscipit purus, quis suscipit sem. Praesent in felis neque. Pellentesque a metus pellentesque, dapibus nisl eu, luctus erat. Vestibulum leo sapien, iaculis accumsan cursus vitae, malesuada quis enim. Integer fringilla enim quis cursus porta. Aenean eget metus vestibulum, faucibus dui accumsan, fringilla lorem. Quisque ut feugiat elit. Fusce maximus, ex vel consequat euismod, enim lorem ullamcorper est, vel tempor turpis leo at elit. Nullam eget augue orci. Nunc iaculis nisi ut diam elementum, sit amet blandit arcu sodales. Mauris eget vestibulum est.
                </p>
            </EmphasisBlock>
        </article>
    );
  });