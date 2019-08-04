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
//   var newTrain = {
//     trainName = trainName,
//     destination = destination,
//     frequency = frequency,
//     trainTime = trainTime
// }


});