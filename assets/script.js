


function updateTime() {
  var date = dayjs();
$('#currentDay').text(date.format('dddd, MMM D, YYYY'));

let now = dayjs().format("pp");
  for (let i = 0, i < blockArr.length; i++) {
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
