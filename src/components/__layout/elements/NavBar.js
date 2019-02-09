import React from 'react'
const appSatrt = require('../../../main')


export function generate(_this) {
    return <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav"> 
            {
                _this.state.components.map(component => {
                        return <li className="nav-item active" key={component.name}>
                                    <a className="nav-link" href="#" id={component.name}    
                                        onClick={(e) => {
                                            _this.setState({
                                                'components': _this.state.components.map(element => {
                                                    element.visible = (element.name ==
                                                        component.name) ? true : false
                                                    return element
                                                })
                                            })                                            
                                        }}>
                                        
                                        {component.name}
                                    </a>
                                </li>
                    })
            }
            <li style={{paddingLeft: 1050}}
            className="nav-item active" >
                                    <a 
                                    className="nav-link" href="#"   
                                        onClick={(e) => {
                                            localStorage.removeItem('auth')       
                                            appSatrt.startApp()
                                            _this.forceUpdate()                         
                                        }}>
                                        
                                       Sign Out
                                    </a>
                                </li>
        </ul>
    </nav> 
}