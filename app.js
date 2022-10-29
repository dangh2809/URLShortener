const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
// Accessing the path module
const path = require("path");

//const urls = require('./routes/url');
const app = express();
connectDB();
const URLs = require('./models/URL');
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extend: false}));

// connect DB
app.get('/', (req, res) =>{
    console.log('api executed')
    // URLs.find()
    // .then(url => res.json(url))
    // .catch(err => res.status(404).json({nourlsfound: 'No urls found'}))
});
app.post('/generateShortURL', async (req, res) =>{
    URLs.create(req.body)
    .then(response => res.status(200).json(response))
    .catch(err => err.message)
    
});
app.get('/all', (req,res) =>{
    URLs.find()
    .then(response => console.log(response))
    .catch(err => err.message)
})
app.get('/getClicks/:shortURL', (req,res) =>{
    URLs.find({shortURL: req.params.shortURL})
        .then(response =>{
            res.status(200).json(response);
        })
        .catch(err => console.log(err.message))
})
app.get('/redirect/:shortURLcode', (req,res)=>{
    URLs.findOne({shortURL: req.params.shortURLcode})
        .then(response => {console.log(response); response.clicks++; response.save(); res.redirect(response.longURL)})
        .catch(err => err.message)
    console.log("find long URL");
})




// Step 1:
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});



const port = process.env.PORT || 8082;

app.listen(port, ()=> console.log(`Server running on port ${port}`))