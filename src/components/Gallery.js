/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Gallery extends Component {
	nextImage(){
		let i = this.gallery.findIndex(image => image === this.url);
       
		if(i === this.gallery.length - 1){
			i = -1;
		}
	}

	previousImage(){
		let i = this.gallery.findIndex(image => image === this.url);
		
		if(i === 0){
			i = this.gallery.length;
		}
	}

	render() {
		const data = this.props.data;
	
		return (
			<div className="Gallery">
				<button type="button" className="nextMedia" onClick={ () => this.nextImage() }></button>
				<button type="button" className="previousMedia" onClick={ () => this.previousImage() }></button>
				<div className='containerImage'>
					<img src={data.cover} alt='logement' />
				</div>
			</div>
		);
	}
}
