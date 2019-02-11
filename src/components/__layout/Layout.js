import React, { Component } from 'react'
import HomePage from '../HomePage/HomePage'

const navBarElement = require('./elements/NavBar')
const footerElement = require('./elements/Footer')

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
          'components' : [
            { 'name': 'Home', 'visible': true, 'reference': HomePage }
          ]
        }

        this.renderVisibleComponents = () => {
          return this.state.components.map(component => {
                    if (component.visible)
                        return <div key={component.name} ><component.reference /></div>
                })
        }
    }

    render() {
      return (
        <div>  
          <section>
            {navBarElement.generate(this)}
          </section>  
          <section>
            {this.renderVisibleComponents()}
          </section>  
          <section>
            {footerElement.generate(this)}
          </section>
        </div>
      );
    }
  }
  
  export default Layout