import React, { useState, Component, Link, useEffect} from 'react';
import axios from 'axios';
import { set } from 'mongoose';
const baseURL = "http://www.cops43319.xyz";
function HomePage(){
    const [longURL , setLongURL] = useState("");
    const [shortURL, setShortURL] =  useState("");
    const [clicks, setClicks] = useState(0);
    const [isResult, setIsResult] = useState(false);
  

    // useEffect(()=>{
    //     if (isResult){
    //     axios.get(`http://localhost:8082/getClicks/${shortURL}`)
    //         .then(res =>{
    //             console.log(res);
    //             setClicks(res.data[0].clicks);
    //         })
    //         .catch(err => console.log('axios' + err.message));
    //     }
    // }, []);
    async function generateShortURL(){
        try{
            const response = await axios.post(`${baseURL}/generateShortURL`,
            {
                longURL: longURL
            });
            console.log(response.data)
            //console.log('generateShortURL');
            // console.log(response); 
            //updateShortURL(baseURL+response.data.shortURL); 
            //window.location.href="/resultPage";
            setShortURL(response.data.shortURL);
            setIsResult(true);
        } catch(err){
            console.log(err.message)
        }
        // axios.post("http://localhost:8082/generateShortURL",
        //     {
        //         longURL: longURL
        //     }).then(response => {
        //         let baseURL = "http://localhost:8082/";
        //         console.log('generateShortURL');
        //         console.log(response); 
        //         setShortURL(baseURL+response.shortURL); 
        //         window.location.href="/resultPage";
        //     })
        //     .catch(err => console.log(err.message))
        //window.location.href="/resultPage"
    }
    function Result(){
        return (
            <div className="container">
            <div className="flex flex-row">
                <div className="col">
                    <h5>Long URL: <a href={longURL} target="_blank"><span>{longURL}</span></a></h5>
                </div>
                <div className="col">
                    <h5>Short  URL: <a href={`${baseURL}${shortURL}`} target="_blank" ><span>{`${baseURL}/r/${shortURL}`}</span></a></h5>
                </div>
                <div className="col">
                    <h5>Clicks: <span>{clicks}</span></h5>
                </div>
            </div>
            
        </div>
        )
    }
    return(
        <div className="border d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
        <div className="container ">
            <div class="card text-center w-50 mx-auto my-auto">
                <div class="card-header">
                    URL Shortener
                </div>
                <div class="card-body">
                    <h5 class="card-title">Insert URL</h5>
                    <div className="flex flex-row justify-content-evenly items-center">
                        <div className="col">
                            <input type="text" className="w-100" placeholder="URL"onChange={(d)=>setLongURL(d.target.value)}/>
                        </div>
                        <div className="col mt-3">
                            <button className="btn btn-primary" onClick={()=>generateShortURL()}>Generate Short URL</button>
                        </div>

                    </div>
                </div>
            </div>
            {isResult ? Result(): null}
        </div>
        </div>
    )
}
export default HomePage;