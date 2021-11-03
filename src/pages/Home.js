import React, { Component } from 'react';
import Adds from '../components/Adds';
import Header from '../components/Header';

export default class Home extends Component {

	render() {
		return (
			<div className="Home">
				<Header />
				<p>Chez vous,partout et ailleurs</p>
				<Adds />
			</div>
		);
	}
}
