var itemList = [
  {
    itemCode: "1",
    itemName: "Spiderman-3",
    catalogCategory: "Movies",
    Description:
      "Peter Parker (Tobey Maguire) and M.J. (Kirsten Dunst) seem to finally be on the right track in their complicated relationship, but trouble looms for the superhero and his lover. Peter's Spider-Man suit turns black and takes control of him, not only giving Peter enhanced power but also bringing out the dark side of his personality. Peter must overcome the suit's influence as two supervillains, Sandman and Venom, rise up to destroy him and all those he holds dear.",
    rating: "3.5",
    getImageURL: "item1.jpg"
  },
  {
    itemCode: "2",
    itemName: "Once Upon A DeadPool",
    catalogCategory: "Movies",
    Description:
      "Wisecracking mercenary Deadpool meets Russell, an angry teenage mutant who lives at an orphanage. When Russell becomes the target of Cable -- a genetically enhanced soldier from the future -- Deadpool realizes that he'll need some help saving the boy from such a superior enemy. He soon joins forces with Bedlam, Shatterstar, Domino and other powerful mutants to protect young Russell from Cable and his advanced weaponry.",
    rating: "3.5",
    getImageURL: "item2.jpg"
  },
  {
    itemCode: "3",
    itemName: "Venom",
    catalogCategory: "Movies",
    Description:
      "Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.",
    rating: "3.5",
    getImageURL: "item3.jpg"
  },
  {
    itemCode: "4",
    itemName: "Brooks Men's Cascadia 12",
    catalogCategory: "Top Deals",
    Description:
      "A notched topline brings angular shape and easy-on convenience to a Western-inspired bootie kicked up with a high squared vamp and a chunky cowgirl heel.",
    rating: "3.5",
    getImageURL: "item4.jpg"
  },
  {
    itemCode: "5",
    itemName: "Aladdin",
    catalogCategory: "Top Deals",
    Description:
      "Aladdin, a poor street urchin who spends his time stealing food from marketplace in Agrabah. His adventures begin when he meets a young girl who happens to be Princess Jasmine, who is forced to be married by her wacky yet estranged father. Aladdin's luck suddenly changes when he retrieves a magical lamp from the Cave of Wonders. What he unwittingly gets is a fun-loving genie who only wishes to have his freedom. Little do they know is that the Sultan's sinister advisor Jafar.",
    rating: "3.5",
    getImageURL: "item5.jpg"
  },
  {
    itemCode: "6",
    itemName: "Women's Cascadia 12",
    catalogCategory: "Top Deals",
    Description:
      "Huge Selection of Shoes for Women, Men and Kids. Find Your Perfect Pair Today. Subscribe To Deals. Shop Online. Buy Gift Certificates. Subscribe For Deals. Track Order. Get Gift Certificates. Get Free Updates. Styles: New Styles, Shop Now, Free Shipping, Men's, Women's, Kids.",
    rating: "3.5",
    getImageURL: "item6.jpg"
  },
  {
    itemCode: "7",
    itemName: "The Wolverine",
    catalogCategory: "Movies",
    Description:
      "Worshiped as a god since the dawn of civilization, the immortal Apocalypse (Oscar Isaac) becomes the first and most powerful mutant. Awakening after thousands of years, he recruits the disheartened Magneto (Michael Fassbender) and other mutants to create a new world order. As the fate of the Earth hangs in the balance, Professor X (James McAvoy) and Raven (Jennifer Lawrence) lead a team of young X-Men to stop their seemingly invincible nemesis from destroying mankind.",
    rating: "3.5",
    getImageURL: "item7.jpg"
  },
  {
    itemCode: "8",
    itemName: "Maggi Noodles",
    catalogCategory: "Grocery",
    Description:
      "Maggi products help bring out the best in every meal. Quick and easy solutions - like bouillons, soups, seasonings and sauces - to aid cooking and add flavour.",
    rating: "3.5",
    getImageURL: "item8.jpg"
  },
  {
    itemCode: "9",
    itemName: "Fruit-Veggie Basket",
    catalogCategory: "Grocery",
    Description:
      "A gift basket, or fruit basket is typically a gift delivered to the recipient at their home or workplace. A variety of gift baskets exist: some contain fruit; while others might contain dry or canned foods such as tea, crackers and jam; or the basket might include a combination of fruit and dried good items.",
    rating: "3.5",
    getImageURL: "item9.jpg"
  }
];

getItem = function(itemID) {
  return itemList.find(x => x.itemCode == itemID);
};

getItems = function() {
  return itemList;
};

getImageURL = image => {
  return "/assets/Images/";
};

module.exports = { getItem, getItems };
