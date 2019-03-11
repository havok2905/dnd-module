import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Container } from '../../../src/components/containers/container';

Enzyme.configure({adapter: new Adapter()});

class ContainerPageObject {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    getTitle() {
        return this.wrapper.find('h1');
    }

    getContent() {
        return this.wrapper.find('.bordered-container');
    }
}

let container = null;
let pageObject = null;

describe('Container', ()=> {
    beforeEach(()=> {
        container = mount(<Container title='title'><p>Foo</p></Container>);
        pageObject = new ContainerPageObject(container);
    });

    test('renders title', () => {
        expect(pageObject.getTitle().text().trim()).toBe('title');
    });

    test('renders children', () => {    
        expect(pageObject.getContent().children()).toHaveLength(2);
    });
});
