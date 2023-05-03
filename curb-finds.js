import data from "./curb-finds-data.json";

export default data.map((item) => {
  item.uri = require("./assets/images/" + item.image);
  return item;
});
