import React, { Component } from 'react'
import Navbar from '../component/Navbar'
import '../style/Home.css'
import axios from 'axios';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
        }
    }
    componentDidMount(){
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=http://rss.detik.com/')
         .then(resp => {
            console.log(resp.data.items[0].title);
            const {items} =resp.data
            this.setState({items})
         });
    }
    
    
    render() {
        return (
            <div>
                <div>
                <Navbar />
                </div>
                   <div className='main cf'>
                       {this.state.items.map(item => (
                           <div>
                           <h1>{item.title}</h1>
                           <img src={item.thumbnail} alt="/"/>
                            <p>{item.description}</p>
                           </div>
                           

                       ))}
                   </div>
                   <div className='footer'>
                               <p>copyright detik.com</p>
                           </div>
            </div>
        )
    }
}
