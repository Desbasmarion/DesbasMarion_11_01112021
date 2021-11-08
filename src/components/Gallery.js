/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			// lengthPictures: this.props.length
		};
	}

	nextImage(){
		if (this.state.count === this.props.length - 1) {
			this.setState({ count: 0 });
		} else {
			this.setState({ count: this.state.count + 1 });
		}
	}

	previousImage(){
		if (this.state.count === 0) {
			this.setState({ count: this.props.length -1});
		} else {
			this.setState({ count: this.state.count -1 });
		}
	}

	render() {
		return (
			<div className="Gallery">
				{this.props.length > 1 && <button type="button" className="nextMedia" onClick={ () => this.nextImage() }></button>}
				{this.props.length > 1 && <button type="button" className="previousMedia" onClick={ () => this.previousImage() }></button>}
				<div className='containerImage'>
					{this.props.data.pictures.map((picture, index) => {
						return (
							index === this.state.count && <img src={picture} alt="" key={index}/>
						);
					})}
				</div>
			</div>
		);
	}
}
