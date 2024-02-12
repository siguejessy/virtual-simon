# Virtual Simon

## [Click to launch Game](https://siguejessy.github.io/sei-project-1/)<br>

[🟢 🔴<br>
🟡 🔵<br>](https://siguejessy.github.io/sei-project-1/)

### Simon - An interactive memorization game.

This is a virtual recreation of the real-world popular toy, Simon, co-invented by “The Father of Video Games”, Ralph H. Baer, and released by Milton-Bradley in 1978.

Fun-fact: The original Simon’s grand debut was at it's special Midnight Release Party at Studio 54 during the 1978 holiday season in NYC! ❄️💃🏼🪩
</br></br>

### General Description:

This virtual Simon is a browser-based game made using HTML, CSS, and JavaScript. The game console houses four primary colored buttons and a center control panel.

Start Button: Player clicks the Start button at the center of the game console to turn on the game and start the first round.
Colored Buttons: The colored buttons are interactive only after the game console is "turned on" via the start button. When Simon or the Player activates the buttons, they light up in a gradient and play four distinct tones.

To start the game, click on the ‘Start’ button at the center of the Simon circle board. The game begins promptly with Simon taking the first turn.

### Game Objective

To correctly mimic Simon's pattern for a longer period of time with each round played.
This is a game of memorization! Simon is an expert pattern builder and will build a pattern for you to mimic each round before you can advance to the next round. Simon will add another button to the sequence with each round you advance through.

If you don't correctly mimic Simon’s pattern, you’ll see a red "Try Again!" message display in the center control panel. To retry, you must click on the Start button.
</br></br>

**Technologies used:**
HTML, CSS, JavaScript, Figma

**Icebox:**<br>
Seperate Start Button as a Power button and Retry button.<br>
Include more sounds to represent turning the game console on, losing, advancing a round.<br>
High Score Tracker - I would have loved to include this in my MVP, but c'est la vie.<br>
Theme Selection - Mix & match between button color themes & sound themes.<br>
Multi-player mode<br>
</br></br>

![image](/assets/images/Simon%20SS1.png)
![image](/assets/images/Simon%20SS2.png)

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
