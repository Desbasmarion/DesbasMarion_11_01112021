import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';

//Index page only used to call the entire application

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
