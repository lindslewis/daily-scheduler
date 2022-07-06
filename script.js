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

$(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 232C237.3 232 248 242.7 248 256V304H296C309.3 304 320 314.7 320 328C320 341.3 309.3 352 296 352H248V400C248 413.3 237.3 424 224 424C210.7 424 200 413.3 200 400V352H152C138.7 352 128 341.3 128 328C128 314.7 138.7 304 152 304H200V256C200 242.7 210.7 232 224 232zM152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"/></svg>).appendTo(".btn");






    