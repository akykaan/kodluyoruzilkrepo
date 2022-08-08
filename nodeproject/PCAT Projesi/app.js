const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");

const ejs = require("ejs");
const photoController = require("./controllers/photoController");
const pageController = require("./controllers/pageController");

const app = express();

// connect db
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// template engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static("public"));
// urldeki datayı oku
app.use(express.urlencoded({ extended: true }));
// data json formatına çevir
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

const port = 3000;

//get
app.get("/", photoController.getAllPhotos);
app.get("/photos/:id", photoController.getPhoto);
app.get("/add", pageController.getAddPage);
app.get("/about",pageController.getAboutPage );


// post
app.post("/photos", photoController.createPhoto);

// update 
app.put("/photos/:id", photoController.updatePhoto);

//delete
app.get("/photos/edit/:id", pageController.getEditPage);


app.delete("/photos/:id", photoController.deletePhoto);

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başladı`);
});
