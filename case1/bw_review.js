"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Marcus Tinney
   Date: 03/11/2020  
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
//Runs the init function when the page loads
window.onload = init;

function init(){
   //Looks for everything in the span#stars img query
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i < stars.length; i++){
      //Changes mouse cursor to a pointer and lights up the stars based on where the cursor is selecting
      stars[i].style.cursor = "pointer";
      stars[i].addEventListener("mouseenter", lightStars);
   }
   //runs the updateCount function everytime a key is released
   document.getElementById("comment").addEventListener("keyup", updateCount);
}   

function lightStars(e){
   //This looks at which star is being selected, and changes the image to a lit star
   var starNumber = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i < starNumber; i++){
      stars[i].src = "bw_star2.png";
   }
   for(var i = starNumber; i < 5; i++){
      stars[i].src = "bw_star.png";
   }
   //Shows the number of stars selected
   document.getElementById("rating").value = starNumber + " stars";
   e.target.addEventListener("mouseleave", turnOffStars);
   //Makes it so the stars are set when clicked
   e.target.addEventListener("click", 
      function(e){
         e.target.removeEventListener("mouseleave", turnOffStars);
      }
   );
}

function turnOffStars(){
   //If the stars are not selected at all, it will not display _ stars in the text box
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i < stars.length; i++){
      stars[i].src = "bw_star.png";
   }
   document.getElementById("rating").value = ""
}
  
function updateCount(){
   //Checks to see if the comment goes over 1000 characters, and prevents the user from posting above 1000 characters
   var commentText = document.getElementById("comment").value;
   var charCount = countCharacters(commentText);
   var wordCountBox = document.getElementById("wordCount")
   document.getElementById("wordCount").value = charCount + "/1000";
   if(charCount > 1000){
      wordCountBox.style.backgroundColor = "red";
      wordCountBox.style.color = "white";
   }else{
      wordCountBox.style.backgroundColor = "white";
      wordCountBox.style.color = "black";
   }
}

  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   