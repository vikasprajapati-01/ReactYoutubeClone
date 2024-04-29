import React from 'react'

import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed.jsx'; 

function Home({sidebar}) {
    return(
        <>
            <Sidebar sidebar = {sidebar}/>
            <div className={`container ${sidebar===true? "": "large-container"}`}>
                <Feed />
            </div>
        </>
    );
}
export default Home