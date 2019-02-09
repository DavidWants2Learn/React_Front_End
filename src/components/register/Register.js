import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)

    }

    render() {
      return (
        <div>  
            <form onSubmit={event => {
              event.preventDefault()
            }}>
              <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label htmlFor="email"><b>Email</b></label>
                <br/>
                <input type="text" placeholder="Enter Email" name="email" required/>
                <br/>
                <br/>
                <label htmlFor="psw"><b>Password</b></label>
                <br/>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <br/>
                <br/>
                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <br/>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                <hr/>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" className="registerbtn">Register</button>
              </div>
              <br/>
              <div className="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
              </div>
            </form>
        </div>
      );
    }
  }
  
  export default Register