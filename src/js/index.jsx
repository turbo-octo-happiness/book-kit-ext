import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import PopupContainer from './components/popup-container';
// import store from './redux/store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<PopupContainer />, document.getElementById('app'));
});

//     <Provider store={store}></Provider>
