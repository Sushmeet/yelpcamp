var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var array = [   
                {name: 'sushi', image: 'http://www.wildnatureimages.com/images%203/060731-346..jpg'},
                {name: 'sushi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg47fiHdXka7QJimVfsjT2Zkmg9Gnoniooesa-zIPzfr1XdX2t'},
                {name: 'sushi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qVXCSOPXdMoNFbsL8ogV2s89RGddbegIaABKGGYHVvyEJ_5l'}
            ]

app.get('/', function(req, res){
    res.render('home');
});

app.get('/playground' , function(req , res){
    var array2 = [   
                {name: 'sushi', image: 'http://www.wildnatureimages.com/images%203/060731-346..jpg'},
                {name: 'tony', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg47fiHdXka7QJimVfsjT2Zkmg9Gnoniooesa-zIPzfr1XdX2t'},
                {name: 'johnny', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qVXCSOPXdMoNFbsL8ogV2s89RGddbegIaABKGGYHVvyEJ_5l'}
            ];
    array2.forEach(function(name) {
        console.log('the name is ' + name.name);
    })
    res.render('campgrounds',{campground: array2});
})
app.listen(2000, function() {
    console.log('Yelp Camp Server is running.');
});