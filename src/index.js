import React from 'react';
import ReactDOM from 'react-dom';
import AppIntl from './AppIntl';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <AppIntl />,
  document.getElementById('root')
);
registerServiceWorker();
