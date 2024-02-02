/*----- variables used to track the state of the game  -----*/
let game;
let curCombo;
let combinationCount

/*----- constants in the game  -----*/
const player1;
const simon;
const buttons = [green, red, yellow, blue];
const startBtn;

/*----- cached elements  -----*/
//Store elements on the page that will be accessed in code more than once in variables 
//to make code more concise, readable and performant.
boardEl
buttonsEl
//startBtnEl (not sure if this should be it's own element or include in buttonEl)
countEl

/*----- event listeners -----*/
startBtnEl.addEventListener('click', function Initialize(){
    //function to render a new board and restart the combination count
});
buttonsEl.addEventListener('click',function(litButton){
    //function will render the button to it's non-default color &
    //play the button's audio when clicked
});

/*----- classes -----*/
class button {
    constructor() {};
/* values 
null:darkGrey
1: green,
2: red,
3: yellow,
4:blue */
// render the buttons to the selected value
}

class SimonLightsGame {
//advance round if player 1 click(s) === simon click(s).
//if player 1 click(s) !== simon clicks, stop the game, announce combination count,
//render restart button & prompt player 1 to try again

    constructor(boardEl, countEl) {};
    //initialize new game
    // reset combination count to 0
    // set the first turn to simon
}

/*----- functions -----*/

// pseudo code 
//initialize a new game

//create a two new empty arrays from the original buttons array at the start
//of the game. 

//assign 1 new array to simon and 1 new array to Player 1

//Fill Simon's empty array with a random auto selected element from the original buttons array
// on simon's first turn. 

// function to alternate whose turn it is

// function to listen to Player 1's click and compare it to Simon's click
// if Player 1 click === simon's click, advance round.