import React from 'react';

const Header = props => (
  <div className="app-header">
    <div className='app-header__prefix'><span>wormhole</span>.exchange</div>

    {props.formState === 'exchange' && <div>
      <div className='app-header__main'>atomic</div>
      <h1 className="app-header__headline">Crypto Exchange</h1>
    </div>}
  </div>
);

export default Header;
