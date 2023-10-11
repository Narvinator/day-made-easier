


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

setInterval(updateTIme, 1000);


var saveBtn = $(".saveHolder");
var blockContainer = $(".container");
var block9am = $("#hour-9");
var block10am = $("#hour-10");
var block11am = $("#hour-11");
var block12pm = $("#hour-12");
var block1pm = $("#hour-1");
var block2pm = $("#hour-2");
var block3pm = $("#hour-3");
var block4pm = $("#hour-4");
var block5pm = $("#hour-5");

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