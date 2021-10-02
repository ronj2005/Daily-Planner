// Current Date
var today = moment().format("MMMM Do, YYYY");
today = $("#time-display").text(today);

console.log(today);

// create container
var createContainer = $(".container");
// create save button
var saveButton = $(".saveBtn");
console.log(saveButton);
// variable id for highlightByHour function
var timeId = [
  "1","2","3","4","5","6","7","8",
  "9","10","11","12","13","14","15",
  "16","17","18","19","20",
  "21","22","23","24",
];
// input varibales for text form
var numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];



// stores the data from the input into localStorage
function localStorageFunction() {
  for (let index = 0; index < numbers.length; index++) {
    $("input")[index].value = localStorage.getItem("input" + String(index + 1));
  }
}

// saving stored data entered in the textarea
$("button").on("click", function (event) {
  event.preventDefault();

  for (let index = 0; index < numbers.length; index++) {
    localStorage.setItem("input" + String(index + 1), $("input")[index].value);
  }
});

// calls localStorage function
localStorageFunction();

// highlighting text-row based on the corresponding hour in the schedule
// * past the hours are grey, current hour is red, & future hours are green
function highlightByHour() {
  var currentHour = moment().hours();
  currentHour = $(".text-row").each(function () {
    var blockHour = parseInt($(this).attr("id"));

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
//calls the highlightByHour function
highlightByHour();
