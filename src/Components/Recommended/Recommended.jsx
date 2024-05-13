import React, { useEffect, useState } from 'react'

import './Recommended.css'

// import thumbnail1 from '../../assets/thumbnail1.jpg'
// import thumbnail2 from '../../assets/thumbnail2.jpg'
// import thumbnail3 from '../../assets/thumbnail3.jpg'
// import thumbnail4 from '../../assets/thumbnail4.jpg'
// import thumbnail5 from '../../assets/thumbnail5.jpg'
// import thumbnail6 from '../../assets/thumbnail6.webp'
// import thumbnail7 from '../../assets/thumbnail7.webp'
// import thumbnail8 from '../../assets/thumbnail8.jfif'

import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom';

function Recommended({categoryId, selectRegion}) {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${selectRegion}&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items));
    }

    useEffect (() => {
        fetchData()
    },[categoryId ,selectRegion])

    return(
        <div className='recommended'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                        {/* <img src={thumbnail1} alt="" /> */}
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="video-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} views</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Recommended