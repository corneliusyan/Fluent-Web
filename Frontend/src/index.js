import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Web from './Web';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Web />, document.getElementById('root'));

serviceWorker.unregister();
