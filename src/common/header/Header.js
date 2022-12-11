import React, { Component } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
        )
    }
}

export default Header