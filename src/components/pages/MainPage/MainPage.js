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
          <Header onBack={() => this.setState({ formState: 'exchange' })} switchEstimator={this.switchEstimator} formState={formState} />
        </div>

        <Exchange setFormState={this.setFormState} formState={formState} />

        {formState === 'exchange' && <HowItWorks />}

        <Footer />

        <Estimator isShown={isEstimatorShown} onClose={this.closeEstimator} />
        {isEstimatorShown && <div className="overlay" />}

      </div>
    );
  }
}

export default MainPage;
