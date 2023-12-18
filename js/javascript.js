/*
File: javascript.js
GUI Assignment: HW5
Jacob George, UMass Lowell Computer Science,
jacob_george@student.uml.edu
Copyright (c) 2023 by Jacob George. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JG on December 17th, 9:42 PM
Sources: 
Scrabble_Pieces_AssociativeArray_Jesse.js - created by Jesse M. Heines
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
Class Examples
*/

// used this algorithm to reference values
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;

var randomTiles = getNewTiles(ScrabbleTiles);

function DragAndDropTiles() { // managing tiles that can be dragged and dropped
    $("#Scrabble_Rack img").draggable(); // all images on the rack are now draggable
    $(".droppable").droppable({ // Scrabble row is a droppable area
      drop: function(event, ui) {
        // Set the tile ID and attributes
        var newtileID = ui.draggable.attr("id");
        var whatTilesWereDroppedOnWhatSquare = $(this).attr("id");
  
        // used to track what tiles were placed 
        console.log(newtileID + ' was dropped on ' + whatTilesWereDroppedOnWhatSquare);
      }
    });
}

addNewTiles(randomTiles);


function getNewTiles(tilesArray) { // Function to generate the new random tiles
    var emptyTiles = [];
    var possibleTiles;
    var i = 0;

    while (i < 7) { // attempts to filter out the tiles from ScrabbleTiles that have a number-remaning value greater than 0
        possibleTiles = Object.keys(tilesArray).filter(function(letter) {
            const { "number-remaining": numberRemaining } = tilesArray[letter]; // check if the "numberRemaining" is greater than 0
            return numberRemaining > 0;
        });
        emptyTiles.push(possibleTiles[(Math.floor(Math.random() * possibleTiles.length))]); //selects a random number between the range of possible tiles and pushes that onto the new set of tiles
        ++i;
    }
    return emptyTiles; // returns that new set of tiles
}
  

function addNewTiles(tileLetters) { // add new tiles to the rack itself
    var rack = document.getElementById('Scrabble_Rack');
    var tile;
    tileLetters.forEach(function(letter, index) { // giving each of the tile attributes
        tile = document.createElement('div');
        tile.innerHTML = '<img src="images/Scrabble_Tile_' + letter + '.jpg" alt="' + letter + '">';
        rack.appendChild(tile); // adding the new tiles to the rack
    });
}


$(document).ready(function() {
    DragAndDropTiles();
});