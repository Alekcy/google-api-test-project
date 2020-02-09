import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './store/store.js';

ReactDOM.render((
	<StateProvider>
		<App />
	</StateProvider>
), document.getElementById('root'));

serviceWorker.unregister();
