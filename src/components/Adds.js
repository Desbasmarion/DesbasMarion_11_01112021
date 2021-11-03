//import { array } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Adds extends Component {
    
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		fetch('data.json')
			.then(response => response.json())
			.then(data => {
				this.setState({ data: data });
			})
			.catch(e => console.log(e));
	}
    
	render() {
		return (
			<div className="Adds">
				{this.state.data.map(data => {
					return <Link key={data.id} to={{ pathname:'/housing', search:`?id=${data.id}` }}>
						<article>
							<h2>{data.title}</h2>
							<img src={data.cover} alt='house'></img>
						</article>
					</Link>;
				})}
			</div>
		);
	}
}
