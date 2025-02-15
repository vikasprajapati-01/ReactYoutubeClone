import React, { useEffect, useState } from 'react'

import './PlayVideo.css'

import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import channelUser from '../../assets/channelUser.jpg'
import user_profile from '../../assets/user_profile.jpg'

import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

function PlayVideo() {
    
    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    // const fetchVideoData = async () => {
    //     const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    //     await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    // }

    const fetchVideoData = async () => {
        try {
            const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
            const response = await fetch(videoDetails_url);
            const data = await response.json();
            
            if (data.items && data.items.length > 0) {
                setApiData(data.items[0]);
            } else {
                console.error("No video data found");
            }
        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };

    const fetchChannelData = async () => {

        // Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]));

        // Comment Data
        const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commentData_url).then(res => res.json()).then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchVideoData();
    }, [videoId])

    useEffect(() => {
        if (apiData && apiData.snippet) {
            fetchChannelData();
        }
    }, [apiData]);

    return (
        <div className='play-video'>
            {/* <video src={video} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "views here"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : 'time of upload'}</p>
                <div>
                    <span> <img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : 'like count here'}</span>
                    <span> <img src={dislike} alt="" /></span>
                    <span> <img src={share} alt="" />Share</span>
                    <span> <img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                {/* <img src={channelUser} alt="" /> */}
                <img src={channelData ? channelData.snippet.thumbnails.default.url : 'image here'} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : 'Channel Name'}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : 'subscriber count here'} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-discription">
                <p>{apiData ? apiData.snippet.description.slice(0, 500) : 'Description here'}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 'Comment count here'} Comments</h4>
                {commentData.map((item, index) => {

                    return (
                        <div key={index} className="comment">
                            {/* <img src={user_profile} alt="" /> */}
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className='comment-action'>
                                    <img src={like} alt="" />
                                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PlayVideo