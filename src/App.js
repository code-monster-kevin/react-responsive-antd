import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import logo from './logo.svg';
import './App.css';
import DropDownLocale from './components/common/DropDownLocale';

const messages = defineMessages({
  title: {
    id: 'app.title',
    defaultMessage: 'React App Base'
  },
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

class App extends Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;

    document.title = formatMessage(messages.title);

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
