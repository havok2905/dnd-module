import React from 'react';
import { storiesOf } from '@storybook/react';
import { EmphasisBlock } from '../../src/components/emphasis-block/emphasis-block';
import { MonsterBlock } from '../../src/components/monster-block/monster-block';
import { RollTable } from '../../src/components/roll-table/roll-table';
import { CollapsableContainer } from '../../src/components/containers/collapsable-container';
import { Container } from '../../src/components/containers/container';
import { Footer } from '../../src/components/footer/footer';
import { Page } from '../../src/components/page/page';
import { TableOfContents } from '../../src/components/table-of-contents/table-of-contents';
import { Columns } from '../../src/components/containers/columns';

storiesOf('Example', module)
    .add('Example', () => {   
        return (
            <React.Fragment>
                <Page>
                    <h1 id='root'>Module Name</h1>
                    <img src='https://placekitten.com/1200/800'/>
                    <h2 id='table-of-contents'>Table of Contents</h2>
                    <TableOfContents
                        contentsList={
                            [
                                {
                                    title: 'Chapter 1',
                                    link: '#chapter-1',
                                    children: [
                                        {
                                            title: 'Roll Table',
                                            link: '#roll-table',
                                            children: []
                                        },
                                        {
                                            title: 'Test Monster',
                                            link: '#test-monster',
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    title: 'Chapter 2',
                                    link: '#chapter-2',
                                    children: [
                                        {
                                            title: 'Emphasis Block',
                                            link: '#emphasis-block',
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    />
                </Page>
                <Page>
                    <h1 id='chapter-1'>Chapter 1</h1>
                    <Columns>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nisl sed accumsan tincidunt. Pellentesque nibh elit, vehicula et ipsum in, fringilla accumsan justo. Duis vel eros vitae augue porta faucibus. Mauris convallis viverra turpis, pulvinar facilisis dui sollicitudin sit amet. Sed eget suscipit purus, quis suscipit sem. Praesent in felis neque. Pellentesque a metus pellentesque, dapibus nisl eu, luctus erat. Vestibulum leo sapien, iaculis accumsan cursus vitae, malesuada quis enim. Integer fringilla enim quis cursus porta. Aenean eget metus vestibulum, faucibus dui accumsan, fringilla lorem. Quisque ut feugiat elit. Fusce maximus, ex vel consequat euismod, enim lorem ullamcorper est, vel tempor turpis leo at elit. Nullam eget augue orci. Nunc iaculis nisi ut diam elementum, sit amet blandit arcu sodales. Mauris eget vestibulum est.
                        </p>
                        <Container
                            title='Roll Table'
                            idSlug='roll-table'>
                            <RollTable
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
                        </Container>
                    </Columns>
                    <CollapsableContainer
                        title='Test Monster'
                        idSlug='test-monster'>
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
                </Page>
                <Page>
                    <h1 id='chapter-2'>Chapter 2</h1>
                    <EmphasisBlock idSlug='emphasis-block'>
                        <Columns>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nisl sed accumsan tincidunt. Pellentesque nibh elit, vehicula et ipsum in, fringilla accumsan justo. Duis vel eros vitae augue porta faucibus. Mauris convallis viverra turpis, pulvinar facilisis dui sollicitudin sit amet. Sed eget suscipit purus, quis suscipit sem. Praesent in felis neque. Pellentesque a metus pellentesque, dapibus nisl eu, luctus erat. Vestibulum leo sapien, iaculis accumsan cursus vitae, malesuada quis enim. Integer fringilla enim quis cursus porta. Aenean eget metus vestibulum, faucibus dui accumsan, fringilla lorem. Quisque ut feugiat elit. Fusce maximus, ex vel consequat euismod, enim lorem ullamcorper est, vel tempor turpis leo at elit. Nullam eget augue orci. Nunc iaculis nisi ut diam elementum, sit amet blandit arcu sodales. Mauris eget vestibulum est.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nisl sed accumsan tincidunt. Pellentesque nibh elit, vehicula et ipsum in, fringilla accumsan justo. Duis vel eros vitae augue porta faucibus. Mauris convallis viverra turpis, pulvinar facilisis dui sollicitudin sit amet. Sed eget suscipit purus, quis suscipit sem. Praesent in felis neque. Pellentesque a metus pellentesque, dapibus nisl eu, luctus erat. Vestibulum leo sapien, iaculis accumsan cursus vitae, malesuada quis enim. Integer fringilla enim quis cursus porta. Aenean eget metus vestibulum, faucibus dui accumsan, fringilla lorem. Quisque ut feugiat elit. Fusce maximus, ex vel consequat euismod, enim lorem ullamcorper est, vel tempor turpis leo at elit. Nullam eget augue orci. Nunc iaculis nisi ut diam elementum, sit amet blandit arcu sodales. Mauris eget vestibulum est.
                            </p>
                        </Columns>
                    </EmphasisBlock>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    });