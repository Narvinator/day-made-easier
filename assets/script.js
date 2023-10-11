
// The first part of this function is what gives the top of the page the full date.

function updateTime() {
  var date = dayjs();
$('#currentDay').text(date.format('dddd, MMM D, YYYY'));

let now = dayjs().format("pp");
  for (let i = 0; i < blockArr.length; i++) {
    blockArr[i].removeClass("future past present");

    if (now > blockArr[i].data("hour")) {
      blockArr[i].addClass("past");
    } else if (now === blockArr[i].attr("hour-block")) {
      blockArr[i].addClass("present");
    } else {
      blockArr[i].addClass("future");
    }
  }
}


setInterval(updateTime, 1000);

// Gives the hour blocks on the scheduler a property to be used in an Array

var saveBtn = $(".saveHolder");
var blockContainer = $(".container");
var block9am = $("#hour-9");
var block10am = $("#hour-10");
var block11am = $("#hour-11");
var block12pm = $("#hour-12");
var block1pm = $("#hour-13");
var block2pm = $("#hour-14");
var block3pm = $("#hour-15");
var block4pm = $("#hour-16");
var block5pm = $("#hour-17");

// Actual array for use in the loop at the top of the page

var blockArr = [
  block9am, 
  block10am,
  block11am,
  block12pm,
  block1pm,
  block2pm,
  block3pm,
  block4pm,
  block5pm,
];


updateTime()

document.getElementById("saveHolder").addEventListener("click", function (){

  var user = document.getElementById("description").value ;

  localStorage.setItem("description", user) ;
  console.log("saved")
})

// Accounts for page being refreshed with an autosave feature.

let field = document.getElementById("description");

if (sessionStorage.getItem ("autosave")) {
field.value = sessionStorage.getItem("autosave");
}
field.addEventListener("change", () => {
  sessionStorage.setItem("autosave", field.value);
  // Saves the current session
}
);


