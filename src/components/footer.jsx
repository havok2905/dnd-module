import React, { Component } from 'react';
import DiceRoller from '../services/dice-roller';
import '../styles/components/footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roll: 0
        };

        this.rollInputRef = React.createRef();
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    roll(e) {
        e.preventDefault();
        const str = this.rollInputRef.current.value;
        const roll = DiceRoller.raw(str);
        this.setState({ roll }); 
    }

    render() {
        return (
            <footer className='footer'>
                <button onClick={this.scrollToTop.bind(this)} 
                        className='button'>Back To Top</button>
                
                <form onSubmit={this.roll.bind(this)}>
                    <input ref={this.rollInputRef} type='text' placeholder='1d20+0'/>
                    <button type='submit'>Roll</button>
                </form>
                
                
                <span>Roll: {this.state.roll}</span>
            </footer>
        );
    }
}

export { Footer };