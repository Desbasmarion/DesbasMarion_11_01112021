import React, { Component } from 'react';
import Header from '../components/Header';

export default class Error extends Component {
	render() {
		return (
			<div className="Error">
				<Header />
				<h1>ERREUR 404</h1>
			</div>
		);
	}
}
