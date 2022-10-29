
//require('dotenv').config();

export const buildPath = () =>{
    
    if (process.env.NODE_ENV === "production"){
        return `http://www.cops43319.xyz`
    }
    else {
        return `http://localhost:8082`
    }
}