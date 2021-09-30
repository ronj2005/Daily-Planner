var dateDisplay = $("#time-display");
var createEvent = $("#msg");
var saveButton = $(".btn");
var currentHourForm = moment().hours();
currentHourForm = $(".form-control");
var eventTime = moment().hours();
eventTime = $(".hour-check");

dateDisplay.text(moment().format("dddd, MMMM Do YYYY"));

setInterval(function () {
  dateDisplay.text(moment().format("dddd, MMMM Do YYYY"));
}, 1000);

// create an event listener for save event button
// once save event listener is clicked, the text should be saved to the input box

function saveNewEvent() {
  var userInput = {
    newEvent: createEvent.value,
  };

  localStorage.setItem("createEvent", JSON.stringify(createEvent));
}

saveButton.on("click", function (event) {
  event.preventDefault();
  saveNewEvent();
});

function init() {
  saveNewEvent();
}
init();

//add a highlight effect to the infit box that goes based on what ime of the day it is.
// var timeHighlight

function eventTimeHighlight() {
  eventTime.each(function () {
    
    if (eventTime !== currentHourForm) {
      currentHourForm.addClass("past");
      // console.log("it worked? Maybe?")
    } else if (eventTime == currentHourForm) {
      currentHourForm.addClass("future");
    } else {
      $(".form-control").addClass("present");
      // console.log("it didnt work")
    }
    return;
  });
}

eventTimeHighlight();

















// THE RECYCLING BIN

// parseInt(this.id);


// for (let i = 0; i < timeCheck.length; i++)

// var ChangeAttribute= function () {

// };

// function highlightTime () {
//     var eventTime = moment.hours();
//     var formHighlight = $("form-control");
//     if ()

// }

//local stirage

//time
//description
//save

// var today = $("#currentDay");

// $("#currentDay").text(today.format("MMM Do, YYYY"));
// console.log("#currentdDay");

/*function myFunction () {
    var timeEvent= $("form-control"); // Get the form element in the document
    timeEvent.setAttribute("future", ""); // Create a "class" attribute
    timeEventHL.value = ".future"; // Set the value of the class attribute
// myFunction = $().addclass(".future");
    console.log("clicked");
  }; */

// // add hight lighlight to each id
// function testTime() {
//     // Add time1 9AM
//     time1 = moment().startOf('day').add(9, "hours");
//     // Adjusts current time to the hour
//     currentTime = currentTime.startOf("hour");
//     // Add time1 if/else
//     if (currentTime.isAfter(time1)) {
//         $(".form9").addClass("past");
//     }
//     else if (currentTime.isBefore(time1)) {
//         $(".form9").addClass("future");
//     }
//     else if (currentTime.isSame(time1)) {
//         $(".form9").addClass("present");
//     };

//   var time1 = moment().startOf('day').add(1, "hours");
// var time2 = moment().startOf('day').add(2, "hours");
// var time3 = moment().startOf('day').add(3, "hours");
// var time4 = moment().startOf('day').add(4, "hours");
// var time5 = moment().startOf('day').add(5, "hours");
// var time6 = moment().startOf('day').add(6, "hours");
// var time7 = moment().startOf('day').add(7, "hours");
// var time8 = moment().startOf('day').add(8, "hours");
// var time9 = moment().startOf('day').add(9, "hours");
// var time10 = moment().startOf('day').add(10, "hours");
// var time11 = moment().startOf('day').add(11, "hours");
// var time12 = moment().startOf('day').add(12, "hours");
// var time13 = moment().startOf('day').add(13, "hours");
// var time14 = moment().startOf('day').add(14, "hours");
// var time15 = moment().startOf('day').add(15, "hours");
// var time16 = moment().startOf('day').add(16, "hours");
// var time17 = moment().startOf('day').add(17, "hours");
// var time18 = moment().startOf('day').add(18, "hours");
// var time19 = moment().startOf('day').add(19, "hours");
// var time20 = moment().startOf('day').add(20, "hours");
// var time21 = moment().startOf('day').add(21, "hours");
// var time22 = moment().startOf('day').add(22, "hours");
// var time23 = moment().startOf('day').add(23, "hours");
// var time24 = moment().startOf('day').add(0, "hours");

// var timeCheck = [time1,time2,time3,time4,time5, time6, time7, time8,
// time9, time10, time11, time12, time13, time14, time15, time16,
// time17, time18, time19, time20, time21, time22, time23, time24];
