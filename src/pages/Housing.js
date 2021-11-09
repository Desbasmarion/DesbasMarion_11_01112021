import React, { Component } from 'react';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import redStar from '../assets/red_star.svg';
import whiteStar from '../assets/white_star.svg';

export default class Housing extends Component {
    
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			title:'',
			cover:'',
			pictures: [],
			description: '',
			host: {},
			rating: '',
			location: '',
			equipments: [],
			tags:[],
		};
	}

	componentDidMount() {
		//return to the top of the page
		window.scrollTo(0, 0);

		//recovery data from json
		fetch('../data.json')
			.then(response => response.json())
			.then(data => {
				const url = window.location.search;
				const newParam = new URLSearchParams(url);
				const idParam = newParam.get('id');

				//only return the data of the current slot
				const dataHousing = data.find(data => data.id === idParam);	
				this.setState({ id: dataHousing.id, title: dataHousing.title, cover: dataHousing.cover, pictures: dataHousing.pictures, description: dataHousing.description, host: dataHousing.host, rating: dataHousing.rating, location: dataHousing.location, equipments: dataHousing.equipments, tags: dataHousing.tags });
			})
			.catch(e => console.log(e));
	}

	render() {
		const mainData = this.state;
		const range = [1, 2, 3, 4, 5];

		return (
			<div className="Housing">
				<Header />
				<Gallery data={mainData} length={this.state.pictures.length}/>
				<div className='appartment' key={mainData.id}>
					<div className='generalInfos'>
						<div className='locationInfos'>
							<h2>{mainData.title}</h2> 
							<h3>{mainData.location}</h3>
							<div className='tagsContainer'>
								{mainData.tags.map(tag =>{
									return <span key={mainData.id + tag} className='tags'>{tag}</span>;
								})}
							</div>
						</div>
						<div className='otherInfos'>
							<div className='hostInfos'>
								<span className='name'>{mainData.host.name}</span>
								<img src={mainData.host.picture} alt='profil' className='profilPicture'></img>
							</div>
							<div className='ratingContainer'>
								{range.map(number => {
									return (number <= parseInt(this.state.rating, 10) ? <img src={redStar} alt='red star' key={number}></img> : <img src={whiteStar} alt='white star' key={number}></img>);
								})}
							</div>
						</div> 
					</div>
					<div className='textContainer'>
						<Accordion title='Description' text={mainData.description} classname='textDescription'/>
						<Accordion title='Equipements' text={mainData.equipments.map(equipment => {
							return <span key={mainData.id + equipment}>{equipment}</span>;})} classname='textEquipments'/>
					</div>   
				</div>
				<Footer />                      
			</div>
		);
	}
}
