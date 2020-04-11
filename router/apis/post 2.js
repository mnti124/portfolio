const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Post = require('../../models/Post')


let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/home', (req, res) => {
    res.render('home');
})

router.post('/',(req, res, next) => {
    //console.log(req.body);
    //Retreived information obtained from user
    let email = req.body.email;
    let name = req.body.name;
    let message = req.body.message;
    newPost = new Post({
        email: email,
        name: name,
        message: message
    })

    //saved post in the database
    newPost.save()
    .then(post => {
        //res.json(post);
        res.render('contact_success', {data: req.body});
    }).catch(err => {
        console.log(err);
    })

    
})


module.exports = router;