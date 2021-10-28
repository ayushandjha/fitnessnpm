const express = require("express");
const path = require("path");
const app = express();
const port = 80;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the templet engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('home.pug');
});

app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
});

app.get('/about', (req, res)=>{
    res.status(200).render('about.pug');
});

app.get('/tips', (req, res)=>{
    res.status(200).render('tips.pug');
});






// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application has started successfully on port ${port}`);
});