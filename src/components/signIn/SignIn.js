import React, { Component } from 'react'
import Register from "../register/Register"


const restartApp = require('../../main')
const footer = require('./SignIn.Footer')
const navBar = require('./SignIn.NavBar')

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Register: false
        }
    }

    render() {
      return (
        <div>  
            {navBar.generate()}

            {!this.state.Register ? 
            <form onSubmit={event => {
                event.preventDefault()
                const userName = event.target.userName.value
                const password =  event.target.password.value

                if (userName == "David" && password == "123")
                {
                    localStorage.setItem('auth', 'David')
                    restartApp.startApp()
                    this.forceUpdate()
                }
            }} style={{marginLeft:15, marginTop: 15}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input style={{width:"50%"}} className="form-control"placeholder="Username"  name="userName"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input style={{width:"50%"}}  type="password" className="form-control" 
                    name="password"
                    placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button style={{marginLeft: 15}} 
                onClick={event => {
                    this.setState({Register: true})
                }}
                className="btn btn-success">Register</button>
            </form> : 
            <Register />
        }
        
            <div style={{marginTop: -25}}>
            {footer.generate()}
            </div>

        </div>
      );
    }
  }
  
  export default SignIn