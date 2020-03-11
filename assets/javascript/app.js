$(document).ready(function() {


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
var database = firebase.database() ;

//intial values
var name = ""
var destination = ""
var frequency = ""
var firstTrain = ""
var minAway = ""

//Button Click
$("#search").on("click", function(event) {
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
 



})

//push to database
database.ref().push({
name: name ,
destination: destination ,
frequency: frequency ,
firstTrain: firstTrain


})

//snapshot the values of a form
database.ref().on("child_added" , function(snapshot){

  var sv = snapshot.val() ;

  console.log("name" , sv.name)
  console.log("destination" , sv.destination)
  console.log("frequency" , sv.frequency)
  console.log("firstTrain" , sv.firstTrain)

  $("#firstTrain").text(sv.name) ;
  $("#destinations").text(sv.destination) ;
  $("#frequencies").text(sv.frequency) ;
  $("#firstTrain").text(sv.firstTrain) ;




})
//use moment to get itme
//set interval to train schedule
//calculate till next train
//display with jquery





})