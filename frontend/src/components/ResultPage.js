import React, { useState, Component, useEffect } from 'react';
import axios from 'axios';
import { set } from 'mongoose';
function ResultPage({longURL, shortURL}){

    const [clicks, setClicks] = useState(0);
   

    // useEffect(()=>{
    //     axios.get(`http://localhost:8082/getClicks/${shortURL}`)
    //         .then(res =>{
    //             console.log(res);
    //             setClicks(res.data.clicks);
    //         })
    //         .catch(err => console.log('axios' + err.message));
    // },[]);
    return(
        
        <div className="container">
            <div className="flex flex-row">
                <div className="col">
                    <h5>Long URL: <a><span>{longURL}</span></a></h5>
                </div>
                <div className="col">
                    <h5>Short URL: <a><span>{shortURL}</span></a></h5>
                </div>
                <div className="col">
                    <h5>Clicks: <span>{clicks}</span></h5>
                </div>
            </div>
            
        </div>
    )
}
export default ResultPage;