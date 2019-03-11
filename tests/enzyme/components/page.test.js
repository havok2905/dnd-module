import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Page } from '../../../src/components/page/page';

Enzyme.configure({adapter: new Adapter()});

describe('Page', ()=> {
    test('renders children', () => {
        const page = mount(<Page><p>Foo</p></Page>);
        expect(page.children()).toHaveLength(1);
    });
});
