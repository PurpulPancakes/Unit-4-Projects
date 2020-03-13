"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Marcus Tinney
    Date: 3/12/2020  
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/
//This is the code, it makes the calculator work! :D
//Jokes aside, this loads the init function when the page is opened
window.onload = init;

function init(){
   var calcButtons = document.getElementsByClassName("calcButton");
   for(var i = 0; i < calcButtons.length; i++){
      //This checks if one of the buttons on the page are clicked
      calcButtons[i].addEventListener("click", buttonClick);
   }
   //This will check if keys are being pressed down on the keyboard
   document.getElementById("calcWindow").addEventListener("keydown", calcKeys);
}

function buttonClick(e){
   var calcValue = document.getElementById("calcWindow").value;
   var calcDecimal = document.getElementById("decimals").value;
   var buttonValue = e.target.value;
   //These effect the equation on the calculator in various ways
   switch(buttonValue){
      //Deletes the whole equation
      case "del":
         calcValue = "";
         break;
      //Deletes the last number/digit
      case "bksp":
         calcValue = eraseChar(calcValue);
         break;
      //Submits the equation to be solved
      case "enter":
         calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
         break;
      //Lets the previous equation be used
      case "prev":
         calcValue = lastEq(calcValue);
         break;
      default:
         calcValue = calcValue + buttonValue;
         break;
   }
   document.getElementById("calcWindow").value = calcValue;
   document.getElementById("calcWindow").focus()
}

function calcKeys(e){
   var calcValue = document.getElementById("calcWindow").value;
   var calcDecimal = document.getElementById("decimals").value;
   //These effect the equation on the calculator in various ways, but with the keyboard
   switch(e){
      //Deletes the whole equation
      case "Delete":
         calcValue = "";
         break;
      //Submits the equation to be solved
      case "Enter":
         calcValue += " = " + evalEq(calcValue, calcDecimal);
         break;
      //Lets the previous equation be used
      case "ArrowUp":
         calcValue += "lastEq(calcWindow.value)"
         e.preventDefault();
         break;
   }
   document.getElementById("calcWindow").value = calcValue;
}



/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}