import React, { Component } from 'react'
import { Document } from 'react-pdf'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <div style={{margin: 15}}>  
          <p>
              Hello, World!
          </p>
        </div>
      );
    }
  }
  
  export default HomePage