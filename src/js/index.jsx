import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import Popup from './components/popup';
// import store from './redux/store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Popup />, document.getElementById('app'));
});

//     <Provider store={store}></Provider>
