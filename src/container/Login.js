import React,{ Component } from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import '../style/Login.css';


class login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      username: '',
      password: '',
      valueError: '',
      token: '',
      redirect: false,

    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  signIn = (i) => {
    i.preventDefault();
  
    const dataInput = {
      username: this.state.username,
      password: this.state.password
    }

    this.setState({
      isLoading: true
    })
  
    axios.post('https://penjualanapp-api.herokuapp.com/api/v1/auth/login', dataInput)
    .then(response => {
      localStorage.setItem('token', response.data.data.token)
    this.setState({
    token: response.data.data.token,
    isLoading:false,
    redirect:true,
  
  })
    }).catch(err => {
      console.log(err)
    })
  }
  

  render () {
    const { username, password, isLoading, } = this.state;
    if (localStorage.getItem('token')) {
      return <Redirect to = "/home"/>
    } else if (isLoading) {
      return <h1>Loading ....</h1>
    }
    
    
    return (
      <div className="login">
      <form onSubmit={this.signIn}>
        <h1>Hello</h1>
        <div>
          <input className="form-sign" type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
        </div>

        <div>
          <input className="form-sign" type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
        </div>

        <button className='button' type="submit">Log In</button>
      </form>
      <a className="link" href="/">Can't login?</a>
      </div>
    )
  }
}
export default login;