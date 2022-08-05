const mongoose = require("mongoose");
const schema = mongoose.Schema;

// connect db
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create schema
const PhotoSchema = new schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema);

// create photo

// Photo.create({
//   title: "photo title 1",
//   description: "photo description 1 lorem",
// });

// Photo.find({}, (err, data) => {
//   console.log(data);
// });


const id = "62e92cdcaec39085eb8fb990";
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: "Photo Title 1 updated",
//     description: "Photo description 1 updated",
//   },
//   { new: true },
//   (err, data) => {
//     console.log(data);
//   }
// );

Photo.findByIdAndDelete(id,(err,data)=>{
    console.log("silindi");
})