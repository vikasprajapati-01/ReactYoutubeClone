import React, { useState } from 'react'

import './Navbar.css'

import menu_icon from '../../assets/menu.png'
import logo from '../../assets/youtube-icon.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/user1.jpg'

import { Link } from 'react-router-dom'

function Navbar({setSidebar, setSelectRegion}) {

    return(
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img src={menu_icon} alt="" className='menu-icon' onClick={() => setSidebar(prev => prev===false? true: false)} />
                <Link to='/'><img src={logo} alt="" className='logo'/></Link>
            </div>

            <div className='select-region'>
                <label>Select Region:</label>
                <select id="region" name='region'
                    onChange={e => {setSelectRegion(e.target.value)}}
                >
                    <option value="US" >USA</option>
                    <option value="IN" >India</option>
                    <option value="JP" >Japan</option>
                    <option value="RU" >Russia</option>
                    <option value="KR" >Korea</option>
                    <option value="MX" >Mexico</option>
                    <option value="GB" >UK</option>
                    <option value="AU" >Australia</option>
                </select>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search'/>
                    <img src={search_icon} alt="" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={profile_icon} className='user-icon' alt="" />
            </div>
        </nav>
    );
}

export default Navbar