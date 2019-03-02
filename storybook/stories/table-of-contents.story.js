import React from 'react';
import { storiesOf } from '@storybook/react';
import { TableOfContents } from '../../src/components/table-of-contents/table-of-contents';

storiesOf('TableOfContents', module)
  .add('TableOfContents', () => {
    return (
      <TableOfContents
            contentsList={
                [
                    {
                        title: '1',
                        link: '#',
                        children: [
                            {
                                title: '1A',
                                link: '#',
                                children: []
                            },
                            {
                                title: '1B',
                                link: '#',
                                children: [
                                    {
                                        title: '1BA',
                                        link: '#',
                                        children: [
                                            
                                        ]
                                    }       
                                ]
                            },
                            {
                                title: '1C',
                                link: '#',
                                children: []
                            }
                        ]
                    }
                ]
            }
      />
    )
  });