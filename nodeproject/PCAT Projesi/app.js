const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");

const path = require("path");
const ejs = require("ejs");
const fs = require("fs");
const Photo = require("./models/Photo");

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

app.get("/", async (req, res) => {
  const photos = await Photo.find({}).sort({ dateCreated: -1 }); // or -dateCreated
  res.render("index", {
    photos,
  });
});

app.get("/photos/:id", async (req, res) => {
  //console.log(req.params.id);
  //res.render("about");
  const photo = await Photo.findById(req.params.id);
  res.render("photo", {
    photo,
  });
});

app.post("/photos", async (req, res) => {
  try {
    console.log(req.files);
    const uploadDir = "public/uploads";

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    let uploadedImage = req.files.image;
    let uploadPath = __dirname + "/public/uploads/" + uploadedImage.name;

    uploadedImage.mv(uploadPath, async () => {
      await Photo.create({
        ...req.body,
        image: "/uploads/" + uploadedImage.name,
      });
      res.redirect("/");
    });
  } catch (error) {
    console.log("error:", error);
  }
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/photos/edit/:id", async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render("edit", {
    photo,
  });
});

app.put("/photos/:id", async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });

  photo.title = req.body.title;
  photo.description = req.body.description;
  await photo.save();

  res.redirect(`/photos/${req.params.id}`);
});

app.delete("/photos/:id", async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedImage = __dirname + "/public" + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndRemove(req.params.id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başladı`);
});
