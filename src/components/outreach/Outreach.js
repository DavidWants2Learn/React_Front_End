import React, { Component } from 'react'

const webApiClient = require('../../webApiClient/WebApiClient')

class Outreach extends Component {
    componentDidMount() {
      webApiClient.fetchFilters().then(result => {
        console.log(result)
        // this.result = result
        // this.forceUpdate()
        console.log(result)
      })
    }

    render() {
      return (
        <div>  
          <p>Hello! from Outreach.js</p>
         <p>{this.result}</p>
          <button type="button" className="btn btn-success">Success</button>  

        </div>
      );
    }
  }
  
  export default Outreach