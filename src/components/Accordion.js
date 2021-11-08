import React, { Component } from 'react';
import PropTypes from 'prop-types';  

export default class Accordion extends Component {

	constructor(props){
		super(props);
		this.state = {
			show: false,
			classlist: false
		};
	}

	onToggle(){
		this.setState({
			show: !this.state.show,
			classlist: !this.state.classlist
		});
	}
  
	render() {
		Accordion.propTypes = {
			title: PropTypes.string,
			text: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.array
			]),
			classname: PropTypes.string
		};
    
		return (
			<div className="Accordion">
				<aside className='description'>
					<div className='titleSection'>
						<h3>{this.props.title}</h3>
						<button type="button" className={this.state.classlist ? 'buttonShow' : 'buttonHide'} onClick={() => this.onToggle()} ></button>
					</div>
					{this.state.show  ? (<div className={this.props.classname}>{this.props.text}</div>): null}
				</aside>
			</div>
		);
	}
  
}
