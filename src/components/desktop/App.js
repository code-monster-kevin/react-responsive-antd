import React from 'react';
import DropDownLocale from '../common/DropDownLocale';
import AppMenu from '../common/AppMenu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppMenu mode="horizontal" />
        <DropDownLocale
          locale={this.props.locale}
          handleChangeLocale={this.props.handleChangeLocale}
        />
      </div>
    );
  }
}

export default App;
