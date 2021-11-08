import React, { Component } from 'react';
import Adds from '../components/Adds';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Home extends Component {

	render() {
		return (
			<div className="Home">
				<Header />
				<Banner />
				<Adds />
				<Footer />
			</div>
		);
	}
}
