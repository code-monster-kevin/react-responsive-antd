import React from 'react';
import AppMenu from '../common/AppMenu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>This is mobile app</h1>
        <AppMenu mode="vertical" />
      </div>
    );
  }
}

export default App;
