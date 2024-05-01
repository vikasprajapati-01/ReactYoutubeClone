import React from 'react'

import './Sidebar.css'

import home from '../../assets/home.png'
import games from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/user1.jpg'
import simon from '../../assets/user2.jpg'
import tom from '../../assets/user3.jpg' 
import megan from '../../assets/user4.jpg'
import cameron from '../../assets/user5.jpg'

function Sidebar({sidebar, category, setCategory}) {
    return(
        <div className={`sidebar ${sidebar===true? "": "no-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category===0?"active" : ""}`} onClick={() => setCategory(0)}>
                    <img src={home} alt="" /> <p>Home</p>
                </div>
                <div className={`side-link ${category===20 ?"active" : ""}`} onClick={() => setCategory(20)}>
                    <img src={games} alt="" /> <p>Gaming</p>
                </div>
                <div className={`side-link ${category===2?"active" : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobiles} alt="" /> <p>Automobile</p>
                </div>
                <div className={`side-link ${category===17?"active" : ""}`} onClick={() => setCategory(17)}>
                    <img src={sports} alt="" /> <p>Sport</p>
                </div>
                <div className={`side-link ${category===24?"active" : ""}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} alt="" /> <p>Entertainment</p>
                </div>
                <div className={`side-link ${category===28?"active" : ""}`} onClick={() => setCategory(28)}>
                    <img src={tech} alt="" /> <p>Tech</p>
                </div>
                <div className={`side-link ${category===10?"active" : ""}`} onClick={() => setCategory(10)}>
                    <img src={music} alt="" /> <p>Music</p>
                </div>
                <div className={`side-link ${category===22?"active" : ""}`} onClick={() => setCategory(22)}>
                    <img src={blogs} alt="" /> <p>Blogs</p>
                </div>
                <div className={`side-link ${category===25?"active" : ""}`} onClick={() => setCategory(25)}>
                    <img src={news} alt="" /> <p>News</p>
                </div>
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={simon} alt="" /> <p>Mr Beauty</p>
                </div>
                <div className="side-link">
                    <img src={jack} alt="" /> <p>Tech Buster</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="" /> <p>Run dev</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="" /> <p>Bro Workout</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="" /> <p>Lets Play</p>
                </div>
            </div>
        </div>
    );
}
export default Sidebar