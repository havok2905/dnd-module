import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ItemBlock } from '../../../src/components/item-block/item-block';

Enzyme.configure({adapter: new Adapter()});

class ItemBlockPageObject {
    constructor(component) {
        this.component = component;
    }

    getImage() {
        return this.component.find('img');
    }
}

let itemBlock = null;

const defaultProps = {
    name: 'name',
    rarity: 'rarity',
    type: 'type'
};

const imageProps = {
    ...defaultProps,
    image: 'https://placekitten.com/900/300'
};

describe('ItemBlock', ()=> {
    test('renders without an image', () => {
        itemBlock = shallow(<ItemBlock { ...defaultProps }><p>Child text</p></ItemBlock>);
        const pageObject = new ItemBlockPageObject(itemBlock);
        expect(pageObject.getImage()).toHaveLength(0);
    });

    test('renders with an image', () => {
        itemBlock = shallow(<ItemBlock { ...imageProps }><p>Child text</p></ItemBlock>);
        const pageObject = new ItemBlockPageObject(itemBlock);
        expect(pageObject.getImage()).toHaveLength(1);
    });
});
