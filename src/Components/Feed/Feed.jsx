import React from 'react'

import './Feed.css'

import thumbnail1 from '../../assets/thumbnail1.jpg'
import thumbnail2 from '../../assets/thumbnail2.jpg'
import thumbnail3 from '../../assets/thumbnail3.jpg'
import thumbnail4 from '../../assets/thumbnail4.jpg'
import thumbnail5 from '../../assets/thumbnail5.jpg'
import thumbnail6 from '../../assets/thumbnail6.webp'
import thumbnail7 from '../../assets/thumbnail7.webp'
import thumbnail8 from '../../assets/thumbnail8.jfif'

import { Link } from 'react-router-dom'

function Feed() {
    return(
        <div className="feed">
            <Link to={`video/34/7485`} className="card">
                <img src={thumbnail1} alt="" />
                <h2>Top 5 phones to buy in April 2024</h2>
                <h3>MernStatue</h3>
                <p>16M views &bull; 17 days ago </p>
            </Link>
            <div className="card">
                <img src={thumbnail2} alt="" />
                <h2>How to motivate yourself</h2>
                <h3>Motivate</h3>
                <p>1.6M views &bull; 5 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail3} alt="" />
                <h2>Top 5 fastest cars </h2>
                <h3>Running Vehices</h3>
                <p>198k views &bull; 7 months ago </p>
            </div>
            <div className="card">
                <img src={thumbnail4} alt="" />
                <h2>Play this new Amazing game</h2>
                <h3>Tech Gaming</h3>
                <p>60k views &bull; 15 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail5} alt="" />
                <h2>Big trillon days</h2>
                <h3>Share News</h3>
                <p>80k views &bull; 21 hours ago </p>
            </div>
            <div className="card">
                <img src={thumbnail6} alt="" />
                <h2>Chotu Lambu episode 3</h2>
                <h3>Cartoon Adda</h3>
                <p>80M views &bull; 1 year ago </p>
            </div>
            <div className="card">
                <img src={thumbnail7} alt="" />
                <h2>Everything about Discipline</h2>
                <h3>Discipline</h3>
                <p>160k views &bull; 3 months ago </p>
            </div>
            <div className="card">
                <img src={thumbnail8} alt="" />
                <h2>200 Push Up challenge</h2>
                <h3>Daily Workout</h3>
                <p>140k views &bull; 4 years ago</p>
            </div>
            <div className="card">
                <img src={thumbnail3} alt="" />
                <h2>Top 5 fastest cars </h2>
                <h3>Running Vehices</h3>
                <p>198k views &bull; 7 months ago </p>
            </div>
            <div className="card">
                <img src={thumbnail4} alt="" />
                <h2>Play this new Amazing game</h2>
                <h3>Tech Gaming</h3>
                <p>60k views &bull; 15 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail5} alt="" />
                <h2>Big trillon days</h2>
                <h3>Share News</h3>
                <p>80k views &bull; 21 hours ago </p>
            </div>
            <div className="card">
                <img src={thumbnail6} alt="" />
                <h2>Chotu Lambu episode 3</h2>
                <h3>Cartoon Adda</h3>
                <p>80M views &bull; 1 year ago </p>
            </div>
            <div className="card">
                <img src={thumbnail5} alt="" />
                <h2>Big trillon days</h2>
                <h3>Share News</h3>
                <p>80k views &bull; 21 hours ago </p>
            </div>
            <div className="card">
                <img src={thumbnail6} alt="" />
                <h2>Chotu Lambu episode 3</h2>
                <h3>Cartoon Adda</h3>
                <p>80M views &bull; 1 year ago </p>
            </div>
            <div className="card">
                <img src={thumbnail7} alt="" />
                <h2>Everything about Discipline</h2>
                <h3>Discipline</h3>
                <p>160k views &bull; 3 months ago </p>
            </div>
            <div className="card">
                <img src={thumbnail8} alt="" />
                <h2>200 Push Up challenge</h2>
                <h3>Daily Workout</h3>
                <p>140k views &bull; 4 years ago</p>
            </div>
        </div>
    );
}

export default Feed