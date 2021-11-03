import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import Header from '../components/Header';


export default class Housing extends Component {
    
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		fetch('../data.json')
			.then(response => response.json())
			.then(data => {
				this.setState({ data: data });
			})
			.catch(e => console.log(e));
	}
 
	render() {
		const alldata = this.state.data;
		// eslint-disable-next-line react/prop-types
		const url = window.location.search;
		const newUrl = new URLSearchParams(url);
		const idParam = newUrl.get('id');
       
		const dataHousing = alldata.find(data => data.id === idParam);
		console.log(dataHousing);
        
		return (
			<div className="Housing">
				<Header />
				<Gallery data={dataHousing}/>

				{/* <div className='appartment' key={dataHousing.id}>
					<h2>Gallery component</h2>
					<div className='generalInfos'>
						<div className='locationInfos'>
							<h2>{dataHousing.title}</h2> 
							<h3>{dataHousing.location}</h3>
							{dataHousing.tags.map(tag =>{
								return <span key={dataHousing.id + tag} className='tags'>{tag}</span>;
							})}
						</div>
						<div className='otherInfos'>
							<div className='hostInfos'>
								<span className='name'>{dataHousing.host.name}</span>
								<img src={dataHousing.host.picture} alt='profil' className='profilPicture'></img>
							</div>
							<span>{dataHousing.rating}⭐</span>
						</div>
                               
					</div>
					<div className='textContainer'>
						<aside className='description'>{dataHousing.description}</aside>
						<aside className='equipments'> {dataHousing.equipments.map(equipment => {
							return <span key={dataHousing.id + equipment}>{equipment}</span>;
						})}
						</aside>
					</div>   
				</div>;                         */}
			</div>
		);
	}
}
