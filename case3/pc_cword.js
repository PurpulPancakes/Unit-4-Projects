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
var allLetters = "";
//References the letter currently selected in the puzzle
var currentLetter = "";
//References the letters used in the currently selected selected across and down clues
var wordLetters = "";
//References the across clue currently selected
var acrossClue = "";
//References the down clue currently selected
var downClue = "";
//Stores the current typing direction (right or down)
var typeDirection = "right";

function init(){
   var allLetters = document.querySelectorAll("table#crossword span");
   var currentLetter = allLetters[1];

   var acrossID = currentLetter.getAttribute("data-clue-a");
   var downID = currentLetter.getAttribute("data-clue-d");

   var acrossClue = document.getElementById("across").value;
   var downClue = document.getElementById("down").value;
}



   





/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
