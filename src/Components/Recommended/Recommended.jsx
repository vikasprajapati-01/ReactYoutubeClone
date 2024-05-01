import React from 'react'

import './Recommended.css'

import thumbnail1 from '../../assets/thumbnail1.jpg'
import thumbnail2 from '../../assets/thumbnail2.jpg'
import thumbnail3 from '../../assets/thumbnail3.jpg'
import thumbnail4 from '../../assets/thumbnail4.jpg'
import thumbnail5 from '../../assets/thumbnail5.jpg'
import thumbnail6 from '../../assets/thumbnail6.webp'
import thumbnail7 from '../../assets/thumbnail7.webp'
import thumbnail8 from '../../assets/thumbnail8.jfif'

function Recommended() {
    return(
        <div className='recommended'>
            <div className="side-video-list">
                <img src={thumbnail1} alt="" />
                <div className="video-info">
                    <h4>Journey to Vinland </h4>
                    <p>World Explorer</p>
                    <p>180k views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail2} alt="" />
                <div className="video-info">
                    <h4>Road to Ninja </h4>
                    <p>Ninja Village</p>
                    <p>18M views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail3} alt="" />
                <div className="video-info">
                    <h4>5 flying cars </h4>
                    <p>Car Explorer</p>
                    <p>1.8M views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail4} alt="" />
                <div className="video-info">
                    <h4>Bike Stunt </h4>
                    <p>Pro Riders</p>
                    <p>18k views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail5} alt="" />
                <div className="video-info">
                    <h4>Journey to Vinland </h4>
                    <p>World Explorer</p>
                    <p>180k views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail6} alt="" />
                <div className="video-info">
                    <h4>Journey to Vinland </h4>
                    <p>World Explorer</p>
                    <p>180k views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail7} alt="" />
                <div className="video-info">
                    <h4>Journey to Vinland </h4>
                    <p>World Explorer</p>
                    <p>180k views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail8} alt="" />
                <div className="video-info">
                    <h4>Journey to Vinland </h4>
                    <p>World Explorer</p>
                    <p>180k views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail4} alt="" />
                <div className="video-info">
                    <h4>Journey to Vinland </h4>
                    <p>World Explorer</p>
                    <p>180k views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail2} alt="" />
                <div className="video-info">
                    <h4>Journey to Vinland </h4>
                    <p>World Explorer</p>
                    <p>180k views</p>
                </div>
            </div>
        </div>
    );
}

export default Recommended