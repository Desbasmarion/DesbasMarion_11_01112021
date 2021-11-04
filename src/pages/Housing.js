import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import Header from '../components/Header';


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
			show : false
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

	onToggle(){
		this.setState({show: !this.state.show});
	}

	render() {
		const mainData = this.state;
		const rating = parseInt(mainData.rating, 10);

		return (
			<div className="Housing">
				<Header />
				<Gallery data={mainData}/>
				<div className='appartment' key={mainData.id}>
					<div className='generalInfos'>
						<div className='locationInfos'>
							<h2>{mainData.title}</h2> 
							<h3>{mainData.location}</h3>
							{mainData.tags.map(tag =>{
								return <span key={mainData.id + tag} className='tags'>{tag}</span>;
							})}
						</div>
						<div className='otherInfos'>
							<div className='hostInfos'>
								<span className='name'>{mainData.host.name}</span>
								<img src={mainData.host.picture} alt='profil' className='profilPicture'></img>
							</div>
							<span>{rating}⭐</span>
						</div>
                               
					</div>
					<div className='textContainer'>
						<aside className='description'>
							<div className='titleSection'>
								<h3>Description</h3>
								<button type="button" className="collapse" onClick={() => this.onToggle()}></button>
							</div>
							{this.state.show ? (<div className='textDescription'>{mainData.description}</div>): null}
						</aside>
						<aside className='equipments'> 
							<div className='titleSection'>
								<h3>Equipments</h3>
								<button type="button" className="collapse" onClick={() => this.onToggle()}></button>
							</div>
							{this.state.show ? (<div className='textEquipments'>{mainData.equipments.map(equipment => {
								return <span key={mainData.id + equipment}>{equipment}</span>;
							})}</div>): null}
						</aside>
					</div>   
				</div>                      
			</div>
		);
	}
}
