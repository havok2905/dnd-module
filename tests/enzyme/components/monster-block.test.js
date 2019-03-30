import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MonsterBlock } from '../../../src/components/monster-block/monster-block';

Enzyme.configure({adapter: new Adapter()});


class MonsterBlockPageObject {
    constructor(component) {
        this.component = component;
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

    getImage() {
        return this.component.find('[data-qa-target="monster-image"]');
    }

    getInventory() {
        return this.component.find('[data-qa-target="inventory"]');
    }
}

const defaultProps = {
    ac: 10,
    alignment: 'Chaotic Good',
    challenge: '1',
    hp: 100,
    size: 'Medium',
    speed: '30 ft.',
    stats:{
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    },
    title: 'Title',
    type: 'Humanoid'
};

describe('MonsterBlock', ()=> {
    test('MonsterBlock renders with default props', () => {
        const monsterBlock = shallow(<MonsterBlock {...defaultProps}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);

        expect(pageObject.getImage()).toHaveLength(0);

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
        
        expect(pageObject.getFeatures()).toHaveLength(0);
        expect(pageObject.getActions()).toHaveLength(0);
        expect(pageObject.getReactions()).toHaveLength(0);
        
        expect(pageObject.getDescription()).toHaveLength(0);

        expect(pageObject.getSavingThrows()).toHaveLength(0);
        expect(pageObject.getSkills()).toHaveLength(0);
        expect(pageObject.getConditionImmunities()).toHaveLength(0);
        expect(pageObject.getDamageImmunities()).toHaveLength(0);
        expect(pageObject.getDamageResistances()).toHaveLength(0);
        expect(pageObject.getDamageWeaknesses()).toHaveLength(0);
        expect(pageObject.getLanguages()).toHaveLength(0);
        expect(pageObject.getSenses()).toHaveLength(0);
        expect(pageObject.getInventory()).toHaveLength(0);
    });

    test('MonsterBlock renders features', () => {
        const props = {
            ...defaultProps, 
            features: [
                {
                    title: 'title',
                    description: 'description'
                }
            ]
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getFeatures()).toHaveLength(1);
    });

    test('MonsterBlock renders actions', () => {
        const props = {
            ...defaultProps, 
            actions: [
                {
                    title: 'title',
                    description: 'description'
                }
            ]
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getActions()).toHaveLength(1);
    });

    test('MonsterBlock renders reactions', () => {
        const props = {
            ...defaultProps, 
            reactions: [
                {
                    title: 'title',
                    description: 'description'
                }
            ]
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getReactions()).toHaveLength(1);
    });

    test('MonsterBlock renders description', () => {
        const props = {
            ...defaultProps, 
            description: 'description'
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getDescription()).toHaveLength(1);
    });

    test('MonsterBlock renders saving throws', () => {
        const props = {
            ...defaultProps, 
            savingThrows: ['savingThrows']
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getSavingThrows()).toHaveLength(1);
    });

    test('MonsterBlock renders skills', () => {
        const props = {
            ...defaultProps, 
            skills: ['skills']
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getSkills()).toHaveLength(1);
    });

    test('MonsterBlock renders condition immunities', () => {
        const props = {
            ...defaultProps, 
            conditionImmunities: ['immunities']
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getConditionImmunities()).toHaveLength(1);
    });

    test('MonsterBlock renders damage immunities', () => {
        const props = {
            ...defaultProps, 
            damageImmunities: ['immunities']
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getDamageImmunities()).toHaveLength(1);
    });

    test('MonsterBlock renders damage resistance', () => {
        const props = {
            ...defaultProps, 
            damageResistances: ['resistances']
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getDamageResistances()).toHaveLength(1);
    });

    test('MonsterBlock renders damage weakness', () => {
        const props = {
            ...defaultProps, 
            damageWeaknesses: ['weaknesses']
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getDamageWeaknesses()).toHaveLength(1);
    });

    test('MonsterBlock renders languages', () => {
        const props = {
            ...defaultProps, 
            languages: ['language']
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getLanguages()).toHaveLength(1);
    });

    test('MonsterBlock renders senses', () => {
        const props = {
            ...defaultProps, 
            senses: ['sense']
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getSenses()).toHaveLength(1);
    });

    test('MonsterBlock renders inventory', () => {
        const props = {
            ...defaultProps, 
            inventory: ['item']
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getInventory()).toHaveLength(1);
    });

    test('MonsterBlock renders image', () => {
        const props = {
            ...defaultProps, 
            image: 'image'
        };

        const monsterBlock = shallow(<MonsterBlock {...props}/>);
        const pageObject = new MonsterBlockPageObject(monsterBlock);
        
        expect(pageObject.getImage()).toHaveLength(1);
    });
});
