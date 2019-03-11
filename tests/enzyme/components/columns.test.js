import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Columns } from '../../../src/components/containers/columns';

Enzyme.configure({adapter: new Adapter()});

describe('Columns', ()=> {
    test('renders children', () => {
        const columns = mount(<Columns><p>Foo</p></Columns>);
        expect(columns.children()).toHaveLength(1);
    });
});
