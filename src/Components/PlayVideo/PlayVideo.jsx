import React from 'react'

import './PlayVideo.css'

import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import channelUser from '../../assets/channelUser.jpg'
import user_profile from '../../assets/user_profile.jpg'

function PlayVideo() {
    return(
        <div className='play-video'>
            <video src={video} controls autoPlay muted></video>
            <h3>Nature is Beautiful, Enjoy it not Destroy</h3>
            <div className="play-video-info">
                <p>134k views &bull; 4 weeks ago</p>
                <div>
                    <span> <img src={like} alt="" />12k</span>
                    <span> <img src={dislike} alt="" />2k</span>
                    <span> <img src={share} alt="" />Share</span>
                    <span> <img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelUser} alt="" />
                <div>
                    <p>Nature Beauty</p>
                    <span>256k Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-discription">
                <p>Nature is being harmed as days are passing.</p>
                <p>Subscribe for more Nature Videos</p>
                <hr />
                <h4>1.3k Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Marquee Bao <span>3 weeks ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam dolorem ducimus rerum maxime deleniti facere, fuga iure suscipit illo.</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>230</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Marquee Bao <span>3 weeks ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam dolorem ducimus rerum maxime deleniti facere, fuga iure suscipit illo.</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>230</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Marquee Bao <span>3 weeks ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam dolorem ducimus rerum maxime deleniti facere, fuga iure suscipit illo.</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>230</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Marquee Bao <span>3 weeks ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam dolorem ducimus rerum maxime deleniti facere, fuga iure suscipit illo.</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>230</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayVideo