"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 4

   Wordsearch Game Script
   
   Filename: kg_search.js
   Author: Marcus Tinney
   Date: 3/31/2020  
   
   
   Function List
   
   function drawWordSearch(letters, words)
      Returns the HTML code for a word search table based on the entries
      in the letters array and the location of the words
      in the words array
      
   showList(list)
      Returns the HTML for code for an unordered list of words based
      on the items in the list array

*/
//Run the init() function when the page loads
window.onload = init;

function init(){
   //insert the HTML code for the puzzle
   document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordArray);

   drawWordSearch();

   document.addEventListener("mouseup", endBackground);
   
   //Add an event listener to the show solution button
   document.getElementById("showSolution").addEventListener("click",
      function(){
         //remove the inline backgroundColor style from each cell
         if(confirm("Are you sure? That's like cheating dude :/")){
            for(var i = 0; i < puzzleCells.length; i++){
               puzzleCells[i].style.backgroundColor = "";
            }
         }
      }
   )
}



/*============================================================*/

function drawWordSearch(letters, words) {
   var rowSize = letters.length;
   var colSize = letters[0].length;

   var htmlCode = "<table id='wordSearchTable'>";
   htmlCode += "<caption>Word Search</caption>";

   for (var i = 0; i < rowSize; i++) {
      htmlCode += "<tr>";

      for (var j = 0; j < colSize; j++) {
         if (words[i][j] == " ") {
            htmlCode += "<td>";
         } else {
            htmlCode += "<td class='wordCell'>";
         }
         htmlCode += letters[i][j];
         htmlCode += "</td>";
      }

      htmlCode += "</tr>";
   }
   htmlCode += "</table>";

   return htmlCode;
}

function showList(list) {
   var htmlCode = "<ul id='wordSearchList'>";

   for (var i = 0; i < list.length; i++) {
      htmlCode += "<li>" + list[i] + "</li>";
   }

   htmlCode += "</ul>";

   return htmlCode;
}
