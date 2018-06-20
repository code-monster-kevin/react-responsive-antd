import React from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import logo from '../../static/svg/logo.svg';
import './App.css';
import DropDownLocale from '../common/DropDownLocale';

const messages = defineMessages({
  welcome: {
    id: 'app.welcome',
    defaultMessage: 'Welcome to React'
  },
  intro: {
    id: 'app.intro',
    defaultMessage:
      'To get started, edit <code>src/App.js</code> and save to reload.'
  }
});

class App extends React.Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{formatMessage(messages.welcome)}</h1>
        </header>
        <p className="App-intro">{formatMessage(messages.intro)}</p>
        <DropDownLocale
          locale={this.props.locale}
          handleChangeLocale={this.props.handleChangeLocale}
        />
      </div>
    );
  }
}

export default injectIntl(App);
