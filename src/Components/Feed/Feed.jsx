import React , { useEffect, useState } from 'react'
import moment from 'moment'

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
import { API_KEY, value_converter } from '../../data'

function Feed({category}) {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response=> response.json()).then(data => setData(data.items))
    }

    useEffect(() => {
        fetchData();
    },[category])

    return(
        <div className="feed">
            {data.map((item, index) => {
                return(
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
                    </Link>
                )
            })}
        </div>
    );
}

export default Feed