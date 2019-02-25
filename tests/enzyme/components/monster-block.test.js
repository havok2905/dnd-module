import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MonsterBlock from '../../../components/monster-block';

Enzyme.configure({adapter: new Adapter()});


class MonsterBlockPageObject {
    constructor(component) {
        this.component = component;
    }

    getTitle() {
        return this.component.find('h1').text().trim();
    }

    getSubTitle() {
        return this.component.find('[data-qa-target="sub-title"]').text().trim();
    }

    getAc() {
        return this.component.find('[data-qa-target="ac"]').text().trim();
    }

    getHp() {
        return this.component.find('[data-qa-target="hp"]').text().trim();
    }

    getSpeed() {
        return this.component.find('[data-qa-target="speed"]').text().trim();
    }

    getAbility(index) {
        return this.component.find('tr').at(1).find('td').at(index).text().trim();
    }

    getAbilityMod(index) {
        return this.component.find('tr').at(2).find('td').at(index).text().trim();
    }

    getCr() {
        return this.component.find('[data-qa-target="challenge"]').text().trim();
    }

    getFeatures() {
        return this.component.find('[data-qa-target="features"]');
    }

    getActions() {
        return this.component.find('[data-qa-target="actions"]');
    }

    getReactions() {
        return this.component.find('[data-qa-target="reactions"]');
    }

    getDescription() {
        return this.component.find('[data-qa-target="description"]');
    }

    getSavingThrows() {
        return this.component.find('[data-qa-target="saving-throws"]');
    }

    getSkills() {
        return this.component.find('[data-qa-target="skills"]');
    }

    getConditionImmunities() {
        return this.component.find('[data-qa-target="condition-immunities"]');
    }

    getDamageImmunities() {
        return this.component.find('[data-qa-target="damage-immunities"]');
    }

    getDamageResistances() {
        return this.component.find('[data-qa-target="damage-resistances"]');
    }

    getDamageWeaknesses() {
        return this.component.find('[data-qa-target="damage-weaknesses"]');
    }

    getLanguages() {
        return this.component.find('[data-qa-target="languages"]');
    }

    getSenses() {
        return this.component.find('[data-qa-target="senses"]');
    }
}

let monsterBlock = null;

describe('MonsterBlock', ()=> {
    beforeEach(()=> {
        monsterBlock = shallow(
            <MonsterBlock
                ac={10}
                alignment='Chaotic Good'
                challenge='1'
                description='description'
                hp={100}
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
                title='Title'
                type='Humanoid'
            />
        );
    });

    
    test('MonsterBlock renders with default props', () => {
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getTitle()).toEqual('Title');
        expect(pageObject.getSubTitle()).toEqual('Medium Humanoid, Chaotic Good');
        
        expect(pageObject.getAc()).toEqual('10');
        expect(pageObject.getHp()).toEqual('100');
        expect(pageObject.getSpeed()).toEqual('30 ft.');
        expect(pageObject.getSpeed()).toEqual('30 ft.');
        
        expect(pageObject.getAbility(0)).toEqual('10');
        expect(pageObject.getAbility(1)).toEqual('10');
        expect(pageObject.getAbility(2)).toEqual('10');
        expect(pageObject.getAbility(3)).toEqual('10');
        expect(pageObject.getAbility(4)).toEqual('10');
        expect(pageObject.getAbility(5)).toEqual('10');
        
        expect(pageObject.getAbilityMod(0)).toEqual('0');
        expect(pageObject.getAbilityMod(1)).toEqual('0');
        expect(pageObject.getAbilityMod(2)).toEqual('0');
        expect(pageObject.getAbilityMod(3)).toEqual('0');
        expect(pageObject.getAbilityMod(4)).toEqual('0');
        expect(pageObject.getAbilityMod(5)).toEqual('0');
        
        expect(pageObject.getFeatures()).toEqual({});
        expect(pageObject.getActions()).toEqual({});
        expect(pageObject.getReactions()).toEqual({});
        
        expect(pageObject.getDescription()).toEqual({});

        expect(pageObject.getSavingThrows()).toEqual({});
        expect(pageObject.getSkills()).toEqual({});
        expect(pageObject.getConditionImmunities()).toEqual({});
        expect(pageObject.getDamageImmunities()).toEqual({});
        expect(pageObject.getDamageResistances()).toEqual({});
        expect(pageObject.getDamageWeaknesses()).toEqual({});
        expect(pageObject.getLanguages()).toEqual({});
        expect(pageObject.getSenses()).toEqual({});
    });
});
