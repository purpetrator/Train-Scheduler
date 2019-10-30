var firebaseConfig = {
  apiKey: "AIzaSyDbrc8Xt6czKJWsKqtBRSesBCNDD6usFGU",
  authDomain: "ana-s-app.firebaseapp.com",
  databaseURL: "https://ana-s-app.firebaseio.com",
  projectId: "ana-s-app",
  storageBucket: "ana-s-app.appspot.com",
  messagingSenderId: "410619482825",
  appId: "1:410619482825:web:990436e9707f03fefe7318"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Creating a variable to reference the database
var database = firebase.database();

// Initial Variables (SET the first set IN FIREBASE FIRST)
// Note remember to create these same variables in Firebase!
var name = "";
var destination = "";
var frequency = "";
var firstTime = "";

var nextArrival = "";
var minAway = "";

var btn = document.querySelector("#submit-btn");

btn.addEventListener("click", function(e) {
  // Get inputs
  e.preventDefault();

  // This is getting the input from the user form
  name = $("#inputName")
    .val()
    .trim();
  destination = $("#inputDestination")
    .val()
    .trim();
  frequency = $("#inputFrequency")
    .val()
    .trim();
  firstTime = $("#inputFirst")
    .val()
    .trim();

  database.ref().push({
    name,
    destination,
    frequency,
    firstTime
  });
});

database.ref().on("child_added", function(snapshot) {
  var sv = snapshot.val();

  // How often the train comes
  var tFrequency = sv.frequency;
  console.log("freq" + tFrequency);

  // Current time
  var currentTime = moment().format("HH:mm");
  console.log("CURRENT TIME: " + currentTime);

  // First train time
  var firstTrain = sv.firstTime;
  console.log("first time: " + firstTrain);

  // First Time (pushed back 1 year to make sure it comes before current time)
  var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
  console.log("first time conv: " + firstTimeConverted);

  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);

  // Minute Until Train
  var tMinutesTillTrain = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  // Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));

  var newRow = $("<tr>");

  // var newDelete = $("<button>").text("X").addClass("delete-btn").attr("data-id", snapshot.key);
  var newNameCell = $("<td>").text(sv.name);
  var newDestinationCell = $("<td>").text(sv.destination);
  var newFreqCell = $("<td>").text(sv.frequency);

  ////////////// These will be mathy calculations for the last two columns
  // var newNextArr = $("<td>");
  // var newMinAway = $("<td>");

  /////////// Change the HTML to reflect
  // newRow.append(newDelete);
  newRow.append(newNameCell);
  newRow.append(newDestinationCell);
  newRow.append(newFreqCell);
  // newRow.append(newNextArr);
  // newRow.append(newMinAway);

  $("#train-sched").append(newRow);
});

// Code this app to calculate when the next train will arrive; this should be relative to the current time

// Input validation - make sure that the user filled in all the fields
// Make sure the first train time is in military format, don't let the user submit if it isn't
// Delete function if time

// Current Time
