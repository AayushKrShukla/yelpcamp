const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose
  .connect("mongodb://127.0.0.1:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log("CONNECTION SUCCESSFULL!!!");
  })
  .catch((err) => {
    console.log("CONNECTION NOT SUCCESSFULL");
    console.log(err);
  });

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20 + 10);
    const camp = new Campground({
      author: "6259591f87616094bb8f2021",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      geometry: { 
        type: "Point", coordinates: [
        cities[random1000].longitude, 
        cities[random1000].latitude
      ] 
    },
      images: [
        {
          url: "https://res.cloudinary.com/duiqkcalm/image/upload/v1650455041/YelpCamp/aliqmkih0kca11fvynwg.png",
          filename: "YelpCamp/aliqmkih0kca11fvynwg",
        },
        {
          url: "https://res.cloudinary.com/duiqkcalm/image/upload/v1650455085/YelpCamp/emslks12sl0whgaze3y8.png",
          filename: "YelpCamp/emslks12sl0whgaze3y8",
        },
      ],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus possimus esse, laborum explicabo recusandae deleniti voluptatibus eum, qui officia tempore aperiam molestiae numquam voluptatum eaque magni porro maiores quos? Rem?",
      price: price,
    });
    await camp.save();
  }
  //   await c.save();
};

seedDB().then(() => {
  mongoose.connection.close();
});
