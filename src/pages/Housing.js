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
				const url = window.location.search;
				const newParam = new URLSearchParams(url);
				const idParam = newParam.get('id');

				const dataHousing = data.find(data => data.id === idParam);	
				this.setState({ data: dataHousing });
			})
			.catch(e => console.log(e));
	}

	render() {
		const mainData = this.state.data;

		return (
			<div className="Housing">
				<Header />
				<Gallery data={mainData}/>
				<div className='appartment' key={mainData.id}>
					<h2>Gallery component</h2>
					<div className='generalInfos'>
						<div className='locationInfos'>
							<h2>{mainData.title}</h2> 
							<h3>{mainData.location}</h3>
							{/* {mainData.tags.map(tag =>{
								return <span key={mainData.id + tag} className='tags'>{tag}</span>;
							})} */}
						</div>
						<div className='otherInfos'>
							<div className='hostInfos'>
								{/* <span className='name'>{mainData.host.name}</span>
								<img src={mainData.host.picture} alt='profil' className='profilPicture'></img> */}
							</div>
							<span>{mainData.rating}⭐</span>
						</div>
                               
					</div>
					<div className='textContainer'>
						<aside className='description'>{mainData.description}</aside>
						{/* <aside className='equipments'> {mainData.equipments.map(equipment => {
							return <span key={mainData.id + equipment}>{equipment}</span>;
						})}
						</aside> */}
					</div>   
				</div>                      
			</div>
		);
	}
}
