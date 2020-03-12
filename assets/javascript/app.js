$(document).ready(function () {


  //firebase config
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA5zN5cB6gEPgI_GKTEwyW879RFolKxMJQ",
    authDomain: "yeethaw-44fcf.firebaseapp.com",
    databaseURL: "https://yeethaw-44fcf.firebaseio.com",
    projectId: "yeethaw-44fcf",
    storageBucket: "yeethaw-44fcf.appspot.com",
    messagingSenderId: "956768172316",
    appId: "1:956768172316:web:3fb62cd266f48e524922d9",
    measurementId: "G-NQW60SZ9TL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  //intial values
  var name
  var destination
  var frequency
  var firstTrain
  var minAway

  //Button Click
  $("#search").on("click", function (event) {
    event.preventDefault()


    //grabs from form
    name = $("#Train-name").val().trim()
    console.log(name)
    destination = $("#Destination").val().trim()
    console.log(destination)
    frequency = $("#frequency").val().trim()
    console.log(frequency)
    firstTrain = $("#firstTrain").val().trim()
    console.log(firstTrain)

    database.ref().push({
      name: name,
      destination: destination,
      frequency: frequency,
      firstTrain: firstTrain


    })

    //snapshot the values of a form
    database.ref().on("child_added", function (snapshot) {

      var sv = snapshot.val();

      console.log("name", sv.name)
      console.log("destination", sv.destination)
      console.log("frequency", sv.frequency)
      console.log("firstTrain", sv.firstTrain)

      $("#nameTrain").append(sv.name);
      $("#destinations").append(sv.destination);
      $("#frequencies").append(sv.frequency);
      $("#firstTrain").append(sv.firstTrain);


      var convertTime = moment(firstTrain, "HH:mm").subtract(1, "years")
        console.log("convertedtime" , convertTime)

      var currentTime = moment() ;
        console.log(currentTime , "current")

    
      var timeDiff = moment().diff(moment(convertTime), "minutes")
      console.log("time diff" , timeDiff)

      var timeApart = timeDiff % frequency ;

      var timeAway = frequency - timeApart ; 
      console.log(timeAway)

      var nextArrival = moment().add(timeAway, "minutes") ; 
      console.log("next arrival" , nextArrival)

      



    })


  })

  //push to database

  //use moment to get itme
  //set interval to train schedule
  //calculate till next train
  //display with jquery





})