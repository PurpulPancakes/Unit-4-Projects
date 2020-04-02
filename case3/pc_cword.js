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
   var allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0];

   var acrossID = currentLetter.dataset.clueA;
   var downID = currentLetter.dataset.clueD;

   var acrossClue = document.getElementById(currentLetter.dataset.clueA);
   var downClue = document.getElementById(currentLetter.dataset.clueD);
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
}


   





/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
