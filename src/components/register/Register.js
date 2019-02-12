import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <div >  
            <form onSubmit={event => {
              event.preventDefault()

              const userName = event.target.userName.value
              const password = event.target.password.value
              const passwordRepeat = event.target.passwordRepeat.value
              s
            }}>
              <div style={{margin: 20}}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label htmlFor="email"><b>Email</b></label>
                <br/>
                <input type="text" placeholder="Username" 
                name="userName" required/>
                <br/>
                <br/>
                <label htmlFor="psw"><b>Password</b></label>
                <br/>
                <input type="password" placeholder="Enter Password" 
                name="password" required/>

                <br/>
                <br/>
                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <br/>
                <input type="password" placeholder="Repeat Password" 
                name="passwordRepeat" required/>
                <hr/>

                <button type="submit" 
                className="registerbtn">Register</button>
              </div>
              <br/>
            </form>
        </div>
      );
    }
  }
  
  export default Register