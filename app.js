// Firebase Configurations
var firebaseConfig = {
    apiKey: "AIzaSyBxpFmN3R8nHN4yO4_tkQQ8A4injPEopLk",
    authDomain: "train-scheduler-891f7.firebaseapp.com",
    databaseURL: "https://train-scheduler-891f7.firebaseio.com",
    projectId: "train-scheduler-891f7",
    storageBucket: "",
    messagingSenderId: "325484956516",
    appId: "1:325484956516:web:c47ee768596e030f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // create a variable to reference the database
  var database = firebase.database();



//   Onclick event listener to add new trains when the submit button is clicked and prevents the page from reloading
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

// Grab user inputs
var trainName = $("#train-name-input").val().trim();
var destination = $("#destination-input").val().trim();
var trainTime = moment($("#time-input").val().trim(), 'HH:mm').format("HH:mm");
var frequency = $("#frequency-input").val().trim();

  // Creation of local-temporary object to store data
  var newTrain = {
    tname: trainName,
    place: destination,
    freq: frequency, 
    tTime: trainTime
};
// upload data stored in the above local object and push to the Firebase database
database.ref().push(newTrain);
console.log(newTrain.tname);

// Clears all of the text-boxes
$("#train-name-input").val("");
$("#destination-input").val("");
$("#time-input").val("");
$("#frequency-name-input").val("");
});

// Create Firebase event for adding a new Train utilizing an .on child_added listener
database.ref().on("child_added", function(childsnapshot) {
    console.log(childsnapshot.val());

// Store the childsnapshot values into variables
var trainName = childsnapshot.val().tname;
var destination = childsnapshot.val().place;
var frequency = childsnapshot.val().freq;
var trainTime = childsnapshot.val().tTime;

 // first Train pushed back to make sure it comes before current time
var firstTimeConverted = moment(trainTime, "HH:mm");
console.log(firstTimeConverted);
// Current time
var currentTime = moment().format("HH:mm");
console.log("Current Time: " + currentTime);

// store difference between currentTime and firt train that gets entered by the user and convert it in a variable
var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
console.log(trainTime);
  console.log("Difference in Time: " + timeDiff);

// find the remainder of the time left and store in a variable. 
var timeRemainder = timeDiff % frequency;
console.log(timeRemainder);

// How many minutes until the next train arrives and strore in a new variable
var minToTrain = frequency - timeRemainder;
console.log("Minutes Till Next Train: " + minToTrain);

// When the next train is set to arrive
var nextTrain = moment().add(minToTrain, "minutes").format("hh:mm")
// console.log("Arrival Time: " + moment(nextTrain).format("hh:mm"));

// Create a table to have information appended
// var newTable = $("<tr>").append(
//     $("td").text(trainName),
//     $("td").text(destination),
//     $("td").text(frequency),
//     $("td").text(nextTrain),
//     $("td").text(minToTrain),
// );

// // Append the new row to the table
$("#train-schedule-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextTrain + "</td><td>" + minToTrain)

});
