import React from 'react'

import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

function Video({selectRegion}) {

    const {videoId, categoryId} = useParams();

    return(
        <div className='play-container'>
            <PlayVideo videoId={videoId} />
            <Recommended categoryId={categoryId} selectRegion={selectRegion} />
        </div>
    );
}

export default Video