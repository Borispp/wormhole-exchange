import React, { Component } from 'react';

import Header from 'components/containers/Header';
import Footer from 'components/containers/Footer';
import HowItWorks from 'components/containers/HowItWorks';
import Exchange from 'components/containers/Exchange';

import { getSampleRequest } from 'api/requests';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: 'exchange',
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

  render() {
    const { formState } = this.state;

    return (
      <div className="app">
        <div onClick={() => this.setState({ formState: 'exchange' })}>
          <Header formState={formState} />
        </div>

        <Exchange setFormState={this.setFormState} formState={formState} />

        {formState === 'exchange' && <HowItWorks />}

        <Footer />
      </div>
    );
  }
}

export default MainPage;
