//need a moment js bit
//to show the current date AND/OR time: moment().format('MMMM Do YYYY, h:mm:ss a');

// why am I bad at this moment thing, my moment keeps coming back undefined.


//  const current = moment(today).format("dddd, MMMM, Do YYYY, h:mm:ss a");
//  $("#currentDay").text(current);
// console.log(today)

var today = moment();
("#currentDay").text(today.format("dddd, MMMM Do YYYY"));







    