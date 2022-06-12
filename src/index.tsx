import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { App } from './components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './feature';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
