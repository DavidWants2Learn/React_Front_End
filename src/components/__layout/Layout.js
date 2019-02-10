import React, { Component } from 'react'
import Outreach from '../outreach/Outreach'
import Register from '../register/Register'

const navBarElement = require('./elements/NavBar')
const footerElement = require('./elements/Footer')

require('./Layout.css')

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
          'components' : [
            { 'name': 'Register', 'visible': true, 'reference': Register }
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
          <section className='pad15pxFromLeft pad15pxFromTop'>
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