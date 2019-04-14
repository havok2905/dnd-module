import * as React from "react";
import {
    movement,
    action,
    bonusAction,
    reaction,
    condition,
    environmentalEffects
} from "./rules";

const QuickRef = () => {
    const generateList = items => {
        return (
            <dl>
                {items.map((item, index) => {
                    return (
                        <div key={index}>
                            <dt>{item.title}</dt>
                            <dd>{item.description}</dd>
                        </div>
                    );
                })}
            </dl>
        );
    };

    return (
        <section className="quick-ref">
            <h3>Movement</h3>
            <p>limited by movement speed</p>
            <p>
                You can move at any time during your turn (before, after, or
                during actions).
            </p>
            {generateList(movement)}
            <h3>Action</h3>
            <p>1/Turn</p>
            <p>
                You can also interact with one object or feature of the
                environment for free.
            </p>
            {generateList(action)}
            <h3>Bonus Action</h3>
            <p>Max. 1/Turn</p>
            <p>
                You can take a bonus action only when a special ability, spell,
                or feature states that you can do something as a bonus action.
            </p>
            {generateList(bonusAction)}
            <h3>Reaction</h3>
            <p>Max. 1/Round</p>
            <p>
                A reaction is an instant response to a trigger of some kind,
                which can occur on your turn or on someone else's.
            </p>
            {generateList(reaction)}
            <h3>Condition</h3>
            {generateList(condition)}
            <h3>Environmental Effects</h3>
            {generateList(environmentalEffects)}
        </section>
    );
};

export { QuickRef };
