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
 name = $("#Train-name").val.trim() 
 destination = $("#Destination").val.trim()
 frequency = $("#frequency").val.trim()
 firstTrain = $("#").val.trim()
 minAway = $("#").val.trim()



})
//snapshot the values of a form
//push snapshot to database
//use moment to get itme
//set interval to train schedule
//calculate till next train
//display with jquery





})