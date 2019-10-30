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

  // https://firebase.google.com/docs/database/web/read-and-write

  // function setTrainRef(name, destination, frequency, firstTime) {
  //   firebase
  //     .database()
  //     .ref("trains/" + name)
  //     .set({
  //       name,
  //       destination,
  //       frequency,
  //       firstTime
  //     });
  // }

  // // Change what is saved in firebase
  // setTrainRef(name, destination, frequency, firstTime);
});

database.ref().on("child_added", function(snapshot) {
  var sv = snapshot.val();

  // console.log(snapshot.val());
  console.log(snapshot.key);

  // // Console.loging the last user's data
  // console.log(sv.name);
  // console.log(sv.destination);
  // console.log(sv.frequency);
  // console.log(sv.firstTime);

  // var newRow = $("<tr>");

  // var newDelete = $("<button>").text("X").addClass("delete-btn").attr("data-id", snapshot.key);
  // var newNameCell = $("<td>").text(sv.empName);
  // var newRoleCell = $("<td>").text(sv.empRole);
  // var newStartCell = $("<td>").text(sv.empStart);
  // var newRateCell = $("<td>").text(sv.empRate);

  // btnCounter++;

  // // Change the HTML to reflect
  // newRow.append(newDelete);
  // newRow.append(newNameCell);
  // newRow.append(newRoleCell);
  // newRow.append(newStartCell);
  // newRow.append(newRateCell);

  // $("#emp-sched").append(newRow);
});
