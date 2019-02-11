import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <div style={{marginLeft:-100, marginTop: 15}}>  
            <form onSubmit={event => {
              event.preventDefault()

              const userName = event.target.userName.value
              const password = event.target.password.value
              const passwordRepeat = event.target.passwordRepeat.value

              console.log(userName)
              console.log(password)
              console.log(passwordRepeat)
            }}>
              <div className="container">
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