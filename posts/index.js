const express = require('express');
const {randomBytes} = require('crypto'); 
const bodyParser = require('body-parser'); 

const app = express();
app.use(bodyParser.json()); 

// stores all posts that are created
const posts = {}; 

app.get('/posts', (req, res) => {
    res.send(posts); 
}); 

// Assigns a random id. Creates object entry with key id, which maps to object with id and title (blog post msg). 
// Returns request succeeded code, and returns posts[id] object. 
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex'); 
    const {title} = req.body; 
    posts[id] = {id, title}; 

    res.status(201).send(posts[id]); 
}); 

app.listen(4000, ()=>{
    console.log('Listening on port 4000'); 
}); 
