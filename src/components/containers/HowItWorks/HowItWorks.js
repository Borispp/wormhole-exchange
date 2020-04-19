import React, { Component } from 'react';
import classNames from 'classnames';

const questions = [
  {
    title: 'How it works?',
    message: 'Choose the direction of the wormhole and enter your exit address. An entry address will be created for you. Whenever you send funds to your entry address, they will be converted and sent to the exit address. Decentralized.',
  },
  {
    title: 'How are the currencies converted?',
    message: 'Currencies are converted through the Uniswap Exchange.',
  },
  {
    title: 'What is the fee for using a wormhole?',
    message: 'A 0.3% fee is charged on the value transferred through the wormhole.',
  },
  {
    title: 'How can you convert bitcoins decentralized?',
    message: 'We use a decentralized peg-in, peg-out system developed by Provable, called pTokens. For a detailed technical explanation, please consult our docs.',
  },
];

class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openQuestion: null
    };
  }

  setQuestion = questionIndex => () => {
    this.setState(state => ({ openQuestion: state.openQuestion === questionIndex ? null : questionIndex }));
  }

  render() {
    const { openQuestion } = this.state;

    return (
      <div className="how-it-works">
          {questions.map((item, i) => (
            <div className="how-it-works__item" key={i}>
              <span className={classNames('how-it-works__headline', { 'active': openQuestion === i })} onClick={this.setQuestion(i)}>{item.title}</span>
              <div className={classNames('how-it-works__response', { 'active': openQuestion === i })}>{item.message}</div>
            </div>
          ))}
      </div>
    );
  }
}

export default HowItWorks;
