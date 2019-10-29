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

  // https://firebase.google.com/docs/database/web/read-and-write

  function setTrainRef(name, destination, frequency, firstTime) {
    firebase
      .database()
      .ref("trains/" + name)
      .set({
        name,
        destination,
        frequency,
        firstTime
      });
  }

  // Change what is saved in firebase
  setTrainRef(name, destination, frequency, firstTime);
});
