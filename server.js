const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();


let PORT = process.env.PORT || 5000;

app.use( express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');


//Import connection ot database
let db = require('./config/db').database;

//Establishing Connetion to the Database
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('connectino to database successful')
        }).catch( err => {
            console.log('err:' + err);
        })

//Initialize cors middlewarwe
app.use(cors());

//Initialize body-parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const postRoutes = require('./router/apis/post');

app.use('/', postRoutes);


app.listen(PORT, () => {
    console.log('App listening at port ' + PORT);
})