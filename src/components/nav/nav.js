import React from 'react';
import logo from '../../assets/logo.jpg';
import './nav.scss';
import '../../style/button.scss';
 /*<a href="/" className="menu">
                    <i className="fa fa-bars"></i>
                </a>*/

function Nav(){
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='list-item'>
                <div className='item'>Courses</div>
                <div className='item'>Why us</div>
                <div className='item'>Support</div>
                <button className='btn btn-transparant'>Get Started</button>
               
            </div>
        </div>
    );
}

export default Nav;