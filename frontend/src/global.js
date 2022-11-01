
//require('dotenv').config();

export const buildPath = () =>{
    
    if (process.env.NODE_ENV === "production"){
        return `https://bittys.herokuapp.com`
    }
    else {
        return `http://localhost:8082`
    }
}