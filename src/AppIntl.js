import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import zhLocaleData from 'react-intl/locale-data/zh';
import translations from './i18n/locales';
import App from './App';

addLocaleData(zhLocaleData);

class AppIntl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: localStorage.getItem('app.locale') || 'en'
    };
  }

  handleChangeLocale = value => {
    localStorage.setItem('app.locale', value);
    this.setState({ locale: value });
  };

  render() {
    const { locale } = this.state;
    const messages = translations[locale];

    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <App handleChangeLocale={this.handleChangeLocale} locale={locale} />
      </IntlProvider>
    );
  }
}

export default AppIntl;
