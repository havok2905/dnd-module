import React from 'react';
import {
    movement,
    action,
    bonusAction,
    reaction,
    condition,
    environmentalEffects
} from './rules';

import './quick-ref.scss';

const QuickRef = ()=> {
    const generateList = (items)=> {
        return (
            <dl>
                {items.map((item, index)=> {
                    return (
                        <div key={index}>
                            <dt>{item.title}</dt>
                            <dd>{item.description}</dd>
                        </div>
                    )
                })}
            </dl>
        );
    };

    return (
        <section className='quick-ref'>
            <h1>Quick Reference</h1>
            <h2>Movement</h2>
            <p>limited by movement speed</p>
            <p>You can move at any time during your turn (before, after, or during actions).</p>
            {generateList(movement)}
            <h2>Action</h2>
            <p>1/Turn</p>
            <p>You can also interact with one object or feature of the environment for free.</p>
            {generateList(action)}
            <h2>Bonus Action</h2>
            <p>Max. 1/Turn</p>
            <p>You can take a bonus action only when a special ability, spell, or feature states that you can do something as a bonus action.</p>
            {generateList(bonusAction)}
            <h2>Reaction</h2>
            <p>Max. 1/Round</p>
            <p>A reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else's.</p>
            {generateList(reaction)}
            <h2>Condition</h2>
            {generateList(condition)}
            <h2>Environmental Effects</h2>
            {generateList(environmentalEffects)}
        </section>
    );
};

export { QuickRef }