import React, { Component } from 'react'
import Header from '../components/Header'

export default class Housing extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
        data: []
    }
  }

  componentDidMount() {
      fetch('../data.json')
      .then(response => response.json())
      .then(data => {
          this.setState({ data: data })
      })
      .catch(e => console.log(e))
  }
 
     render() {
        const alldata = this.state.data;
        const url = this.props.location.search;
        const newUrl = new URLSearchParams(url);
        const idParam = newUrl.get('id');
       
        const dataHousing = alldata.filter(data => data.id === idParam);
        
         return (
             <div className="Housing">
                 <Header />
                 {dataHousing.map(data => {
                     return <div className='appartment' key={data.id}>
                            <h2>Gallery component</h2>
                            <div className='generalInfos'>
                                <div className='locationInfos'>
                                    <h2>{data.title}</h2> 
                                    <h3>{data.location}</h3>
                                    {data.tags.map(tag =>{
                                        return <span key={data.id + tag} className='tags'>{tag}</span>
                                    })}
                                </div>
                                <div className='otherInfos'>
                                    <div className='hostInfos'>
                                        <span className='name'>{data.host.name}</span>
                                        <img src={data.host.picture} alt='profil' className='profilPicture'></img>
                                    </div>
                                    <span>{data.rating}⭐</span>
                                </div>
                               
                            </div>
                            <div className='textContainer'>
                                <aside className='description'>{data.description}</aside>
                                <aside className='equipments'> {data.equipments.map(equipment => {
                                    return <span key={data.id + equipment}>{equipment}</span>
                                    })}
                                </aside>
                            </div>
                            
                           
                     </div>
                 })}
                         
             </div>
         )
     }
}
