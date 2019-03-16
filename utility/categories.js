const { getItems } = require("./itemDB");
let categories = [];

getItems().forEach(x => {
  if (!categories.includes(x.catalogCategory)) {
    categories.push(x.catalogCategory);
  }
});

module.exports.categories = categories;
