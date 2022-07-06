//need a moment js bit
//to show the current date AND/OR time: moment().format('MMMM Do YYYY, h:mm:ss a');

// WOOOOO. IT WORKS. 
// note to self, always check to make sure your jquery is linked.... will style later. probably going to need the actual time as well so the color coded stuff works?
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// might need event.result at some point for returning the value of an event (so the button added in the third column)
//or an event.handler (see form submittals are listed as an example of event.handlers)
var userInputPrompt = document.getElementById("target").value = "Enter your event here!";
var userInput = document.getElementById("target")
var saveButton = document.getElementsByClassName("btn");
// how to store the user inputted data for the events, likely connect it to the button that is in the 3rd row each.....

// function saveEvent(){
//     saveButton.addEventListener("click", function(){
//         $(saveButton).data("addedEvents", userInput);
//     })
// localStorage.setItem("userInput",JSON.true)
// }

// saveButton.addEventListener("click", function()
userInput.addEventListener("click",function(event){
    var inputField = event.target;
    console.log(userInput)

    if(inputField.matches("#target")){
        var state = inputField.getAttribute("#target.value");
        $(userInput).data();
    }
})
function saveData(){

    var userEvent = userInput.value;
        if (userInput === true){
            document.getElementById("#target").innerHTML = userInput.value;
            userInput.textContent = ("userInput.value")
        }
    saveButton.addEventListener("click", function(event){
        (localStorage.setItem(userEvent));
        console.log(userEvent)
        console.log(event)
    }
)};   











    