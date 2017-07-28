var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// var array = [   
//                 {name: 'sushi', image: 'http://www.wildnatureimages.com/images%203/060731-346..jpg'},
//                 {name: 'tony', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg47fiHdXka7QJimVfsjT2Zkmg9Gnoniooesa-zIPzfr1XdX2t'},
//                 {name: 'johnny', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qVXCSOPXdMoNFbsL8ogV2s89RGddbegIaABKGGYHVvyEJ_5l'}
//             ];

var array =[];

app.get('/', function(req, res){
    res.render('home');
});

app.get('/campgrounds', function(req , res){
    res.render('campgrounds',{campground: array});
});

app.get('/campgrounds/new', function(req, res) {
    res.render('createCamp');
});

app.post('/campgrounds', function(req, res){
    // get data from a form and add to campgrounds array;
    // redirect back to the get camgrounds page.
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    array.push(newCampground);
    res.redirect('/campgrounds');
});


app.listen(5000, function() {
    console.log('Yelp Camp Server is running.');
});