import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import AppDesktop from '../src/components/desktop/App';
import AppMobile from '../src/components/mobile/App';

const messages = defineMessages({
  title: {
    id: 'app.title',
    defaultMessage: 'React App Base'
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const {
      intl: { formatMessage }
    } = this.props;
    const { width } = this.state;
    const isMobile = width <= 768; // tablet

    document.title = formatMessage(messages.title);

    if (isMobile) {
      return (
        <AppMobile
          locale={this.props.locale}
          handleChangeLocale={this.props.handleChangeLocale}
        />
      );
    } else {
      return (
        <AppDesktop
          locale={this.props.locale}
          handleChangeLocale={this.props.handleChangeLocale}
        />
      );
    }
  }
}

export default injectIntl(App);
