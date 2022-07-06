//need a moment js bit
//to show the current date AND/OR time: moment().format('MMMM Do YYYY, h:mm:ss a');

// WOOOOO. IT WORKS. 
// note to self, always check to make sure your jquery is linked.... will style later. probably going to need the actual time as well so the color coded stuff works?
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// might need event.result at some point for returning the value of an event (so the button added in the third column)
//or an event.handler (see form submittals are listed as an example of event.handlers)

var userInput = document.getElementById("target")

// how to store the user inputted data for the events, likely connect it to the button that is in the 3rd row each.....

$( "#target" ).data( "test", "text");
console.log()








    