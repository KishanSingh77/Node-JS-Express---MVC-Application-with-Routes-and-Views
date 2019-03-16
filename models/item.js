class Item {
  constructor(
    itemCode,
    itemName,
    catalogCategory,
    Description,
    rating,
    getImageURL
  ) {
    (this._itemCode = itemCode),
      (this._itemName = itemName),
      (this._catalogCategory = catalogCategory),
      (this._Description = Description),
      (this._rating = rating),
      (this._getImageURL = getImageURL);
  }

  //Setters and Getters
  get itemCode() {
    return this._itemCode;
  }
  get itemName() {
    return this._itemName;
  }
  get catalogCategory() {
    return this._catalogCategory;
  }
  get Description() {
    return this._Description;
  }
  get rating() {
    return this._rating;
  }
  get getImageURL() {
    return "/assets/Images/" + this._getImageURL;
  }

  set itemCode(itemCode) {
    this._itemCode = itemCode;
  }

  set itemName(itemName) {
    this._itemName = itemName;
  }
  set catalogCategory(catalogCategory) {
    console.log("getting");
    this._catalogCategory = catalogCategory;
  }
  set Description(Description) {
    this._Description = Description;
  }
  set rating(rating) {
    this._rating = rating;
  }
  set getImageURL(getImageURL) {
    this._getImageURL = getImageURL;
  }
}

module.exports = Item;
