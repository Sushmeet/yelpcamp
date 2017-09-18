var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// database connecter
mongoose.connect("mongodb://localhost/yelp_camp", {
  useMongoClient: true
});

// Scehema Set up
var campgroundSchema = new Schema({
  name: String,
  image: String,
  description: String,
});

var CampGround = mongoose.model("Camp", campgroundSchema);

// ROUTES
app.get("/", function(req, res) {
  res.render("home");
});

// Index  /campgrounds  GET   Desc: Display all campgrounds
app.get("/campgrounds", function(req, res) {
  // get all the campgrounds from the database
  CampGround.find({}, function(err, allcampgrounds) {
    res.render("index", { campground: allcampgrounds });
  });
});
// Create  /campgrounds  POST   Desc: Create a new Campground.
app.post("/campgrounds", function(req, res) {
  // get data from a form and add to campgrounds array;
  // redirect back to the get camgrounds page.
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = { name: name, image: image, description: description };
  CampGround.create(newCampground, (err, newCampground) => {
    if (err) console.log(err);
    else res.redirect("/campgrounds");
  });
});

// New /campgrounds  GET  Displays form to add a new campground.
app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

app.get("/campgrounds/:id", (req, res) => {
  // find the campground in mongo by id.
  CampGround.findById(req.params.id, (err, foundCampground) => {
    if (err) console.log(err);
    else {
      res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(5000, function() {
  console.log("Yelp Camp Server is running on port 5000.");
});
