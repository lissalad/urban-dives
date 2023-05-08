import data from "./curb-finds-data.json";

// export default data.map((item) => {
//   item.uri = require("./assets/images/" + item.image);
//   return item;
// });

// require() only works on static paths
// for this project I will load images manually
// in the future I could try with google drive link? or put entire path in json

data[0].uri = require("./assets/images/books.png");
data[1].uri = require("./assets/images/kids-stuff.png");
data[2].uri = require("./assets/images/chairs.png");
data[3].uri = require("./assets/images/pans.png");
data[4].uri = require("./assets/images/mattresses-chair.png");
data[5].uri = require("./assets/images/cat.png");
data[6].uri = require("./assets/images/assorted.png");

export default data;
