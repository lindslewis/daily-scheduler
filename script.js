//need a moment js bit
//to show the current date AND/OR time: moment().format('MMMM Do YYYY, h:mm:ss a');

// WOOOOO. IT WORKS. 
// note to self, always check to make sure your jquery is linked.... will style later. probably going to need the actual time as well so the color coded stuff works?
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));





    