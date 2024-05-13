import React , { useState } from 'react'

import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed.jsx'; 

function Home({sidebar, selectRegion}) {

    const [category , setCategory] = useState(0);

    return(
        <>
            <Sidebar sidebar = {sidebar} category ={category} setCategory ={setCategory}/>
            <div className={`container ${sidebar===true? "": "large-container"}`}>
                <Feed category ={category} selectRegion= {selectRegion}/>
            </div>
        </>
    );
}
export default Home