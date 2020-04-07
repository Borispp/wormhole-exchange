import React, { Component } from 'react';
import classNames from 'classnames';

const questions = [
  {
    title: 'How it works?',
    message: 'Currencies are converted through the Uniswap Exchange.',
  },
  {
    title: 'How are the currencies converted?',
    message: 'Currencies are converted through the Uniswap Exchange.',
  },
  {
    title: 'What is the fee for using a wormhole?',
    message: 'Currencies are converted through the Uniswap Exchange.',
  },
  {
    title: 'How can you convert bitcoins decentralized?',
    message: 'Currencies are converted through the Uniswap Exchange.',
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
    this.setState({ openQuestion: questionIndex });
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
