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