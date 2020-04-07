import React from 'react';

const Footer = () => (
  <div className="app-footer-wrapper">
    <div className="app-footer">
      <div className="app-footer__menu-wrapper">
        <div className="app-footer__menu">
          <a href="/" className="app-footer__menu-link">Docs</a>
          <a href="/" className="app-footer__menu-link">GitHub</a>
          <a href="/" className="app-footer__menu-link">Telegram</a>
        </div>
      </div>

      <div className="app-footer__menu-wrapper">
        <span className='app-footer__menu-label'>Powered by:</span>
        <div className="app-footer__menu">
          <a href="https://ethermium.com/" className="app-footer__menu-link">Ethereum</a>
          <a href="https://provable.xyz/" className="app-footer__menu-link">Provable</a>
          <a href="https://dmex.app/" className="app-footer__menu-link">DMEX</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
