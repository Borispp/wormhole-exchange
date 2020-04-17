import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import onClickOutside from "react-onclickoutside";

import iconBtc from 'assets/icons/btc.svg';
import iconEth from 'assets/icons/eth.svg';
import iconClose from 'assets/icons/close.svg';
import iconSwitch from 'assets/icons/switch.svg';
import iconSlippage from 'assets/icons/slippage.svg';
import iconPercent from 'assets/icons/percent.svg';

class Estimator extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleClickOutside = evt => {
    this.props.onClose()
  };

  render() {
    const { isShown } = this.props;

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
              <div className="estimator__input-switch"><img src={iconSwitch} alt='switch' /></div>

              <label className="estimator__input-item">
                <div className="estimator__input-item-icon"><img src={iconBtc} alt='token' /></div>
                <div className="estimator__input-item-wrapper">
                  <input type="text" placeholder='Amount entry' className='default-input' />
                </div>
                <div className="estimator__input-item-label">BTC</div>
              </label>
              <label className="estimator__input-item">
                <div className="estimator__input-item-icon"><img src={iconEth} alt='token' /></div>
                <div className="estimator__input-item-wrapper">
                  <input type="text" placeholder='Amount exit' className='default-input' />
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
