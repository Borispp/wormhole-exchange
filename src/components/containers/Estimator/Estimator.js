import React, { Component } from 'react';
import classNames from 'classnames';
import { CSSTransition } from "react-transition-group";
import onClickOutside from "react-onclickoutside";

import iconBtc from 'assets/icons/btc.svg';
import iconEth from 'assets/icons/eth.svg';
import iconClose from 'assets/icons/close.svg';
import iconSwitch from 'assets/icons/switch.svg';
import iconSlippage from 'assets/icons/slippage.svg';
import iconPercent from 'assets/icons/percent.svg';

class Estimator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputType: null,
    }
  }

  handleClickOutside = evt => {
    this.props.onClose()
  };

  onFocus = inputType => () => {
    this.setState({ inputType });
  };

  onBlur = inputType => () => {
    this.setState({ inputType: null });
  };

  render() {
    const { isShown } = this.props;
    const { inputType } = this.state;

    return (
      <CSSTransition
        in={isShown}
        timeout={400}
        unmountOnExit
        appear>
        {state => (
          <div className='estimator'>
            <span className='estimator__close' onClick={this.props.onClose}><img src={iconClose} alt="close"/></span>

            <h3 className='estimator__header'>rate estimator</h3>

            <div className="estimator__inputs">

              <label className={classNames("estimator__input-item", { 'focused': inputType === 'entry' } )}>
                <div className="estimator__input-item-icon"><img src={iconBtc} alt='token' /></div>
                <div className="estimator__input-item-wrapper">
                  <input type="text" placeholder='Amount entry' className='default-input' onFocus={ this.onFocus('entry') } onBlur={ this.onBlur('entry') } />
                </div>
                <div className="estimator__input-item-label">BTC</div>
              </label>
              <div className="estimator__input-switch"><img src={iconSwitch} alt='switch' /></div>
              <label className={classNames("estimator__input-item", { 'focused': inputType === 'exit' } )}>
                <div className="estimator__input-item-icon"><img src={iconEth} alt='token' /></div>
                <div className="estimator__input-item-wrapper">
                  <input type="text" placeholder='Amount exit' className='default-input' onFocus={ this.onFocus('exit') } onBlur={ this.onBlur('exit') } />
                </div>
                <div className="estimator__input-item-label">ETH</div>
              </label>
            </div>

            <div className="estimator__result-list">
              <div className="estimator__result-list-item">
                <div className="estimator__result-list-item-img">
                  <img src={iconPercent} width='18' alt='percent' />
                </div>
                <div className="estimator__result-list-item-label">exchange rate:</div>
                <div className="estimator__result-list-item-result">1 ETH = 0.0001 BTC</div>
              </div>
              <div className="estimator__result-list-item">
                <div className="estimator__result-list-item-img">
                  <img src={iconSlippage} width='18' alt='percent' />
                </div>
                <div className="estimator__result-list-item-label">slippage</div>
                <div className="estimator__result-list-item-result">0.5%</div>
              </div>
            </div>

            <div className="estimator__msg">
              This is an approximate calculation, the final exchange rate will be known at the time of the swap.
            </div>
          </div>
        )}
      </CSSTransition>
    );
  }
}

export default onClickOutside(Estimator);
