// Institute Variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["assets/images/sapphire.png", "assets/images/emerald.png", "assets/images/diamond.png", "assets/images/Ruby.png"];

// Functions

function randomTargetNumber() {
  targetNumber = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals() {
  for (var i = 0; i < images.length; i++) {
    var crystal = $("<img>");
    crystal.addClass("crystal");
    crystal.attr("src", images[i]);
    crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
    crystal.attr("height", "100");
    $(".crystal-images").append(crystal);
  }
}

function resetHTML() {
  $(".target-number").html(targetNumber);
  $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
  $(".score-number").html(counter);
  $(".crystal-images").empty();
}

function totalReset() {
  randomTargetNumber();
  counter = 0;
  resetHTML();
  resetCrystals();
}

// Running Code

// Inital Page Set Up
randomTargetNumber();
resetHTML();
resetCrystals();

// Click Functions
function crystalClick() {
  //attr returns first value of selected html element
  counter += parseInt($(this).attr("value"));
  $(".score-number").html(counter);
  if (counter == targetNumber) {
    wins++;
    totalReset();
  } else if (counter > targetNumber) {
    losses++;
    totalReset();
  };
};

//Throughout life cycle of the document, accounting for every single time document is dynamically changed execute crystalClick function
$(document).on("click", ".crystal", crystalClick);



//random number is displayed

// assign random values to crystals

//user clicks on an object (crystal) and we get the click from a user

//click creates an incremental counter


//crystal and random number value changes when the user goes up that will change every time a win or loss goes up

//wins loss counter goes up incrementally once a certain number is reached. probably attached to if/then scenario

//update user score section in html when crystal is clicked