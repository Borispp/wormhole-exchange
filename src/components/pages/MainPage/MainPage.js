import React, { Component } from 'react';

import Header from 'components/containers/Header';
import Footer from 'components/containers/Footer';
import HowItWorks from 'components/containers/HowItWorks';
import Exchange from 'components/containers/Exchange';
import Estimator from 'components/containers/Estimator';

import { getSampleRequest } from 'api/requests';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: 'exchange',
      isEstimatorShown: false,
    };
  }

  setFormState = formState => {
    this.setState({ formState });
  };

  async componentDidMount() {
    // Request sample
    try {
      await getSampleRequest();
    } catch (e) {
      console.log(e);
    }
  }

  switchEstimator = () => {
    this.setState(state => ({ isEstimatorShown: !state.isEstimatorShown }));
  };

  closeEstimator = () => {
    this.setState({ isEstimatorShown: false });
  };

  render() {
    const { formState, isEstimatorShown } = this.state;

    return (
      <div className="app">
        <div className='app__header'>
          <Header onBack={() => this.setState({ formState: 'exchange' })} switchEstimator={this.switchEstimator} />
        </div>

        <div className='app__content'>
          {formState === 'exchange' && <div className='app-header__name'>
            <div className='app-header__main'>atomic</div>
            <h1 className="app-header__headline">Crypto Exchange</h1>
          </div>}

          <Exchange setFormState={this.setFormState} formState={formState} />
          {formState === 'exchange' && <HowItWorks />}

        </div>


        <Footer />

        <Estimator isShown={isEstimatorShown} onClose={this.closeEstimator} />
        {isEstimatorShown && <div className="overlay" />}

      </div>
    );
  }
}

export default MainPage;
