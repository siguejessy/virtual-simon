# Virtual Simon
## Read Me: 
### Simon - An interactive memorization game.
🟢 🔴<br>
🟡 🔵<br>

This is a virtual recreation of the real-world popular toy, Simon, co-invented by “The Father of Video Games”, Ralph H. Baer, and released by Milton-Bradley in 1978.

Fun-fact: The original Simon’s grand debut was at it's special Midnight Release Party at Studio 54 during the 1978 holiday season in NYC! ❄️💃🏼🪩
</br></br>

### Virtual Simon
**Objective:** Beat your previous high score (or a friend’s high score!) by correctly repeating Simon’s pattern and advancing through rounds.


**How to play:** Simon is a game of mimic and memorization! Simon is an expert pattern builder and will build a sequential pattern for you to mimic before advancing to the next round.

To start the game, press the ‘Start’ button at the center of the Simon circle board. 
A button will automatically light up and play a sound (that’s Simon giving you the first pattern to mimic!).
Click on the dimmed buttons in the same sequence that Simon showed for each round to advance to the next round.

Simon will add another button to the sequence with each round you advance through.

Example:
Round 1: blue
Round 2: blue, red
Round 3: blue, red, blue
Round 4: blue, red, blue, yellow
Round 5: blue, red, blue, yellow, green
And so on…

If you don't correctly mimic Simon’s given pattern, you’ll be given the option to reset and play again.
</br></br>

**Technologies used:** 
HTML, CSS, JavaScript, Figma

**Icebox:** 
Theme selection - mix & match between button color themes and sound themes.
Pattern Setter: Choose between a 1 player or 2 player game.
1 player game - Simon is the pattern setter
2 player game - player 1 is the pattern setter
</br></br>

```
/*---- pseudo code ----*/

// initialize a new game

// create two new empty arrays from the original buttons array at the start of the game. 

// assign 1 new array to simon and 1 new array to Player 1

// fill Simon's empty array with a random auto selected element from the original buttons array on simon's first turn. 

// function to alternate whose turn it is

// function to listen to Player 1's click and compare it to Simon's click

// if Player 1 click === simon's click, advance round
```