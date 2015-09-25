var baseballFacts = ["The World Series Trophy was redesigned by Tiffany & Co. in 2000",
                    "Only the Boston Red Sox have brought home the newly designed trophy 3 times",
                    "There have only been 46 World Series trophies awarded in MLB history. Prior to 1967, there was no official trophy awarded to the World Series victor"];

var factGenerator = function () {
    return baseballFacts[Math.floor(Math.random() * baseballFacts.length)];
};

module.exports = factGenerator;