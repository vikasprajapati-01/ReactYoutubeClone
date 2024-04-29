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

function Feed() {
    return(
        <div className="feed">
            <div className="card">
                <img src={thumbnail1} alt="" />
                <h2>Top 5 phones to buy in April 2024</h2>
                <h3>MernStatue</h3>
                <p>160k views &bull; 5 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail2} alt="" />
                <h2>Top 5 phones to buy in April 2024</h2>
                <h3>MernStatue</h3>
                <p>160k views &bull; 5 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail3} alt="" />
                <h2>Top 5 phones to buy in April 2024</h2>
                <h3>MernStatue</h3>
                <p>160k views &bull; 5 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail4} alt="" />
                <h2>Top 5 phones to buy in April 2024</h2>
                <h3>MernStatue</h3>
                <p>160k views &bull; 5 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail5} alt="" />
                <h2>Top 5 phones to buy in April 2024</h2>
                <h3>MernStatue</h3>
                <p>160k views &bull; 5 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail6} alt="" />
                <h2>Top 5 phones to buy in April 2024</h2>
                <h3>MernStatue</h3>
                <p>160k views &bull; 5 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail7} alt="" />
                <h2>Top 5 phones to buy in April 2024</h2>
                <h3>MernStatue</h3>
                <p>160k views &bull; 5 days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail8} alt="" />
                <h2>Top 5 phones to buy in April 2024</h2>
                <h3>MernStatue</h3>
                <p>160k views &bull; 5 days ago </p>
            </div>
        </div>
    );
}

export default Feed