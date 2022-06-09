# YELPCAMP
YelpCamp is an app where users can add, remove, edit and review campgrounds. You need to be authenticated to perform most of these actions. This project was part of Colt Steele's Web Developer Course on Udemy

This project was created using Express, NodeJS, MongoDB and Bootstrap.

## Features
* Registration of an account
* Create, edit, update and delete campgrounds
* Add images for the campgrounds
* Show the campground location on map

## Run it locally
1. Install mongodb
2. Create a cloudinary account to get an API key and secret code and also create a Mapbox API token


```
git clone git@github.com:AayushKrShukla/yelpcamp.git using SSH
cd yelpcamp
npm install
```

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:

```
CLOUDINARY_CLOUD_NAME=<name>
CLOUDINARY_KEY=<key>
CLOUDINARY_SECRET=<secret>
MAPBOX_TOKEN=<token>
DB_URL=<MongoDB connectionURL>
```
  
Run mongod in another terminal and node app.js in the terminal with the project.

Then go to localhost:3000.

## Live
The prject is currently live on https://damp-hamlet-43653.herokuapp.com/
