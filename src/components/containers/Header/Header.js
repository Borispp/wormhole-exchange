import React from 'react';

const Header = props => (
  <div className="app-header">
    <div className="app-header__top">
      <div className='app-header__prefix' onClick={props.onBack}><span>wormhole</span>.exchange</div>

      <div>
        <button type='button' className='default-button small filled' onClick={props.switchEstimator}>
          Rate estimator
        </button>
      </div>
    </div>
  </div>
);

export default Header;
