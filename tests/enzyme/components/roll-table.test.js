import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RollTable } from '../../../src/components/roll-table/roll-table';

Enzyme.configure({adapter: new Adapter()});

class RollTablePageObject {
    constructor(component) {
        this.component = component;
    }

    getRows() {
        return this.component.find('tr');
    }

    getHighlightedRow() {
        return this.component.find('.roll-table__row--highlighted')
    }

    getButton() {
        return this.component.find('button');
    }

    getRoll() {
        return this.component.find('p');
    }
}

let rollTable = null;

describe('RollTable', ()=> {
    beforeEach(()=> {
        rollTable = mount(
            <RollTable
                title='Test Roll Table'
                items={[
                    {
                        rollRange:[1],
                        description: 'Foo'
                    },
                    {
                        rollRange:[2, 3],
                        description: 'Bar'
                    }
                ]}
            />
        );
    });

    test('RollTable renders in default state', () => {
        const pageObject = new RollTablePageObject(rollTable);
        const rows = pageObject.getRows();

        expect(rows).toHaveLength(3);
        expect(rows.at(1).find('td').at(0).text().trim()).toEqual('1')
        expect(rows.at(2).find('td').at(0).text().trim()).toEqual('2,3')
        expect(pageObject.getHighlightedRow()).toHaveLength(0);
    });

    test('RollTable will highlight a row when rolled', () => {
        const pageObject = new RollTablePageObject(rollTable);
        const button = pageObject.getButton();

        expect(pageObject.getHighlightedRow()).toHaveLength(0);

        button.simulate('click');

        expect(pageObject.getHighlightedRow()).toHaveLength(1);
    });

    test('RollTable will display a roll when rolled', () => {
        const pageObject = new RollTablePageObject(rollTable);
        const button = pageObject.getButton();

        expect(pageObject.getRoll().text().trim()).toEqual('Roll:');

        button.simulate('click');
        const newRoll = pageObject.getRoll().text().trim();
        
        expect(
            newRoll === 'Roll: 1' ||
            newRoll === 'Roll: 2' ||
            newRoll === 'Roll: 3'
        ).toBeTruthy();
    });
});
