import React, { Component } from 'react';
// import SVGInline from 'react-svg-inline';
import classNames from 'classnames';
import get from 'lodash/get';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {  NotificationManager } from 'react-notifications';

import iconBtc from 'assets/icons/btc.svg';
import iconEth from 'assets/icons/eth.svg';
import iconSwitch from 'assets/icons/switch.svg';
import iconLoading from 'assets/icons/loading.svg';
import iconDirection from 'assets/icons/direction.svg';
import iconCopy from 'assets/icons/copy.svg';
import iconPercent from 'assets/icons/percent.svg';
import imgQR from 'assets/img/qr_sample.png';

const tokens = {
  btc: {
    img: iconBtc,
    label: 'BTC',
  },
  eth: {
    img: iconEth,
    label: 'ETH',
  }
};

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      exchange: {
        from: tokens['btc'],
        to: tokens['eth'],
      },
      exchangeLoading: false,
      error: null
    };
  }

  onSubmitExchange = (e) => {
    e.preventDefault();

    if (this.state.address) {
      this.setState({
        exchangeLoading: true,
      });

      setTimeout(() => {
        this.setState({
          exchangeLoading: false,
        });

        this.props.setFormState('result');
      }, 2000);
    } else {
      this.setState({ error: { address: 'Required' }});
    }
  };

  onInputChange = name => e => {
    this.setState({
      [name]: e.target.value
    });

    this.setState({ error: { [name]: null }});
  };

  onSwitch = () => {
    this.setState(state => ({
      exchange: { from: state.exchange.to, to: state.exchange.from }
    }));
  };


  render() {
    const { address, exchange, exchangeLoading, error } = this.state;
    const { formState } = this.props;

    return (
      <div className={classNames('exchange', { 'form': formState === 'exchange' })}>
        <div className="exchange__wrapper">

          <div className="exchange__box">
            {formState === 'exchange' && <form onSubmit={this.onSubmitExchange} className='exchange__form'>
              <div className="exchange__box-switch">
                <div className="exchange__box-switch-item">
                  <div className="exchange__box-switch-label">from</div>
                  <div className="exchange__box-switch-token-icon"><img src={exchange.from.img} alt={exchange.from.label} /></div>
                  <div className="exchange__box-switch-label-sub">{exchange.from.label}</div>
                </div>

                <div className="exchange__box-switch-button" onClick={this.onSwitch}>
                  <img src={iconSwitch} width='40' alt='switch' />
                </div>

                <div className="exchange__box-switch-item">
                  <div className="exchange__box-switch-label">to</div>
                  <div className="exchange__box-switch-token-icon"><img src={exchange.to.img} alt={exchange.to.label} /></div>
                  <div className="exchange__box-switch-label-sub">{exchange.to.label}</div>
                </div>
              </div>

              <div className="exchange__set-address">
                <p className='exchange__set-address-field'>
                  <input type="text" placeholder='exit address' className={classNames('default-input', { 'error': get(error, 'address') })} onChange={this.onInputChange('address')} value={address} />
                </p>

                <p className='exchange__set-address-field'>
                  <button type='submit' className='default-button'>
                    {exchangeLoading ? <span><img src={iconLoading} alt="loading" width='24' className='exchange__submit-loading' /> Processing...</span> : 'create Wormhole'}
                  </button>
                </p>
              </div>
            </form>}

            {formState === 'result' && <div>
              <div className="exchange__result-heading">Wormhole</div>
              <div className="exchange__result-tokens">
                <div className="exchange__result-token">
                  <img src={exchange.from.img} width='30' alt={exchange.from.label} />
                </div>
                <div className="exchange__result-token-direction">
                  <img src={iconDirection} width='23' alt='direction' />
                </div>
                <div className="exchange__result-token">
                  <img src={exchange.to.img} width='30' alt={exchange.to.label} />
                </div>
              </div>

              <div className="exchange__result-direction-address">
                0xC6563c29f364F7E661FE112A02caA987F87B956f
              </div>

              <div className="exchange__result-qr">
                <img src={imgQR} alt="qr" width='130' />
              </div>

              <div className="exchange__result-list">
                <div className="exchange__result-list-item">
                  <div className="exchange__result-list-item-img">
                    <img src={exchange.from.img} width='18' alt={exchange.from.label} />
                  </div>
                  <div className="exchange__result-list-item-label">entry address:</div>
                  <div className="exchange__result-list-item-result">
                    <CopyToClipboard text='1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2' onCopy={() => NotificationManager.success('Copied')}>
                      <span>
                        1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2
                        <img src={iconCopy} alt="copy" className='exchange__result-copy-icon'/>
                      </span>
                    </CopyToClipboard>
                  </div>

                </div>

                <div className="exchange__result-list-item">
                  <div className="exchange__result-list-item-img">
                    <img src={exchange.to.img} width='18' alt={exchange.to.label} />
                  </div>
                  <div className="exchange__result-list-item-label">exit address:</div>
                  <div className="exchange__result-list-item-result">
                    <CopyToClipboard text='0xC6563c29f364F7E661FE112A02caA987F87B956f' onCopy={() => NotificationManager.success('Copied')}>
                      <span>
                        0xC6563c29f364F7E661FE112A02caA987F87B956f
                        <img src={iconCopy} alt="copy" className='exchange__result-copy-icon'/>
                      </span>
                    </CopyToClipboard>
                  </div>
                </div>

                <div className="exchange__result-list-item">
                  <div className="exchange__result-list-item-img">
                    <img src={iconPercent} width='18' alt='percent' />
                  </div>
                  <div className="exchange__result-list-item-label">opening fee:</div>
                  <div className="exchange__result-list-item-result">0.0001 <span className='exchange__result-list-item-shortname'>ETH</span></div>
                </div>

              </div>

            </div>}
          </div>

          {formState === 'result' && <p className='exchange__notation'>
            The opening fee is paid once when making the first transfer through the wormhole. The fee is used to cover the blockchain costs of opening the wormhole.
          </p>}
        </div>
      </div>
    );
  }
}

export default Exchange;
