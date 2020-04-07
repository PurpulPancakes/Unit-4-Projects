"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Marcus Tinney
   Date: 3/30/2020  
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
window.onload = init;

//References all letters in the crossword puzzle
var allLetters;
//References the letter currently selected in the puzzle
var currentLetter;
//References the letters used in the currently selected selected across and down clues
var wordLetters;
//References the across clue currently selected
var acrossClue;
//References the down clue currently selected
var downClue;
//Stores the current typing direction (right or down)
var typeDirection = "right";

function init(){
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0];

   var acrossID = currentLetter.dataset.clueA;
   var downID = currentLetter.dataset.clueD;

   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);

   document.onkeydown = selectLetter
}
//Step 7
function formatPuzzle(puzzleLetter){
   //7a
   currentLetter = puzzleLetter;
   //7b
   for(var i = 0; i < allLetters.length; i++){
      allLetters[i].style.backgroundColor = "";
   }
   //7c
   acrossClue.style.color = "";
   downClue.style.color = "";
   //7d
   if(currentLetter.dataset.clueA !== undefined){
      //7d I
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      //7d II
      acrossClue.style.color = "blue";
      //7d III
      wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
      //7d IV
      for (var i = 0; i < wordLetters.length; i++){
         wordLetters.style.backgroundColor = "rgb(255, 231, 231)"
      }
   }
   //7e
   if(currentLetter.dataset.clueD !== undefined){
      downClue = document.getElementById(currentLetter.dataset.clueD);
      downClue.style.color = "red";
      wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");
      for (var i = 0; i < wordLetters.length; i++){
         wordLetters.style.backgroundColor = "rgb(255, 231, 231)"
      }
   }
   //7f
   if(typeDirection = "right"){
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }else{
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }

   //Step 8
   return init;

   //8a
   formatPuzzle(currentLetter);

   //8b
   for (var i = 0; i < allLetters.length; i++){
      //8b I
      allLetters[i].style.cursor = "pointer";
      //8b II
      allLetters[i].onmousedown = function(e) {
         formatPuzzle(e.target);
      };
   }
}

//Step 9
function selectLetter(e){
   //9a
   var leftLetter = document.getElementById(currentLetter.dataset.left);
   var upLetter = document.getElementById(currentLetter.dataset.up);
   var rightLetter = document.getElementById(currentLetter.dataset.right);
   var downLetter = document.getElementById(currentLetter.dataset.down);
   //9b
   var userKey = e.keyCode
   //9c
      //9c I
   if(userKey = 37){
      formatPuzzle(leftLetter);
      //9c II
   }else if(userKey = 38){
      formatPuzzle(upLetter);
      //9c III
   }else if(userKey = 39 || 9){
      formatPuzzle(rightLetter);
      //9c IV
   }else if(userKey = 40 || 13){
      formatPuzzle(downLetter);
      //9c V
   }else if(userKey = 8 || 46){
      currentLetter = "";
      //9c VI
   }else if(userKey = 32){
      switchTypeDirection();
      //9c VII
   }else if(userKey >= 65 && userKey <= 90){
      currentLetter.textContent = getChar(userKey);
   }else if(typeDirection = "right"){
      formatPuzzle(rightLetter);
   }else{
      formatPuzzle(downLetter);
   }
   //9d
   e.preventDefault();
   //Step 10
   return init;
}



//Step 11
function switchTypeDirection(){
   //11a
   var typeImage = document.getElementById("directionImg");
   //11b & c
   if(typeDirection = "right"){
      typeDirection = "down";
      typeImage.src = "pc_right.png";
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }else{
      typeDirection = "right";
      typeImage.src = "pc_down.png";
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }

   //Step 12
   return init;
}
//12a
var typeImage = document.getElementById("directionImg");
//12b
typeImage.style.cursor = "pointer";
//12c
document.getElementById("showSolution").onclick = function() {
   for (var i = 0; i < allLetters.length; i++) {
      allLetters[i].textContent = allLetters[i].dataset.letter;
   }
};

/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
