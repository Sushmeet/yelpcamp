var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app', {
    useMongoClient: true
});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

// adding a new cat to the Database.
/* var george = new Cat({
    name: 'Mrs Norris',
    age: 7,
    temperament: 'evil'
})

george.save(function(err,cat){
    if (err) {
        console.log(err)
    }
    else{
        console.log('we just saved a cat in db');
        console.log(cat);
        console.log(george);
    }
}); */

// One step to create a Cat object and to save it.
Cat.create({
    name: 'snow white',
    age: 15,
    temperament: 'bland'
}, function(err, cat){
    if(err) {
        console.log(err);
    }else {
        console.log(cat);
    }
});


// retrieve all cats from the DB

Cat.find({}, function(err,cats) {
    if (err) {
        console.log("error occured");
        console.log(err);
    }
    else {
        console.log("all the cats....")
        console.log (cats);
    }
})