import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<div className="Navigation">
				<NavLink exact to="/" activeClassName="nav-active">
                    Accueil
				</NavLink>
				<NavLink exact to="/about" activeClassName="nav-active">
                    A propos
				</NavLink>
			</div>
		);
	}
}
