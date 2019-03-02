import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RollForm } from '../../../src/components/roll-form/roll-form';

Enzyme.configure({adapter: new Adapter()});

class RollFormPageObject {
    constructor(component) {
        this.component = component;
    }

    getRoll() {
        return this.component.find('span').text().trim();
    }

    getInput() {
        return this.component.find('input');
    }

    getForm() {
        return this.component.find('form');
    }
}

let rollForm = null;

describe('RollTable', ()=> {
    beforeEach(()=> {
        rollForm = mount(<RollForm/>);
    });

    test('RollForm takes in input and generates a dice roll', () => {
        const pageObject = new RollFormPageObject(rollForm);

        pageObject.getInput().instance().value = '1d20+5';
        pageObject.getForm().simulate('submit');

        const roll =  parseInt(pageObject.getRoll());

        console.log(roll);

        const isInRange = roll >= 6 && roll <= 25;

        expect(isInRange).toBe(true);        
    });
});
