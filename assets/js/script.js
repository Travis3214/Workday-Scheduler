$(document).ready(function () {

// Needed constants for functions //
const timespot = parseInt(this.id);
const timeForBlock = dayjs().format('H');

// This is a function to get todays current time and date on the page //
function todaysInfo(){
const currentTime =  dayjs().format('hh:mm:ss A');
const time = $('#currentTime');
const currentDate = dayjs().format('MM/DD/YYYY');
const date =$('#currentDate');
date.text(currentDate);
time.text(currentTime);
setInterval(todaysInfo,1000);
}
todaysInfo();

// This function is to toggle the id to the past present and future tags //
function whichTense(){

  $('.time-block').each(function(){
        $(this).toggleClass('past', timespot > timeForBlock);
        $(this).toggleClass('present', timespot === timeForBlock);
        $(this).toggleClass('future', timespot < timeForBlock);
  });
}
whichTense();

// This function is to change the color of the timepsot depending on the current time //
function changeColor (){

  $('.time-block').each(function(){
    if (timespot > timeForBlock) {
      $(this).removeClass('present future').addClass('past');
    } else if (timespot == timeForBlock){
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  }
  )};

changeColor();

// This is a function so the user can save their events in each timespot using the save button //
function events() {
  $('.saveBtn').on('click', function() {
    const input = $(this).parent().attr('id');
    const value = $(this).siblings('.description').val();
    localStorage.setItem(input, value);
  });
}

$('.time-block').each(function() {
  const input = $(this).attr('id');
  const read = localStorage.getItem(input);
  $(this).children('.description').val(read);
});

events();

});