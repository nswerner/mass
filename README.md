# Mass
* ## Background and Overview

Agar.io is a very simple yet engaging game. The point of the game is to increase your mass by eating food and other players and to avoid players larger than you. The larger you are, the slower you move. You can also eject half of your mass to capture/eat other players!

  * Wireframes
   
    * Homepage ![Homepage](https://github.com/r0ckf0rd/mass/blob/master/assets/images/Homepage.png) <br/><br/>

    * Gameplay ![Gameplay](https://github.com/r0ckf0rd/mass/blob/master/assets/images/Gameplay.png) <br/><br/>

    * Gameplay Annotated ![Gameplay Annotated](https://github.com/r0ckf0rd/mass/blob/master/assets/images/Gameplay-Annotated.png) <br/><br/>

* ## Functionality and MVP Features
1. Basic App Framework
   1. Background
   2. Color Pallete
   3. Playfield
   4. Personal Links

2. Player Object and Movement
   1. Field of view stays centered on player object
   2. Player can navigate the space with a mouse or keyboard

3. Player's Mass Can Increase
   1. Create inanimate mass objects that the player can eat
   2. Eating inanimate mass objects increases the players mass
   3. Increasing the player's mass increases the player's size
   4. The player's speed is dependent on the player's weight

4) BONUS - A.I. Enemies 
   1. A.I. will avoid any enemy players larger than themselves
   2. A.I. will approach any enemy players smaller than themselves

5) BONUS - Split Mass
   1. Players can eject half of their mass in the direction of movement
   2. Players can control both masses
   3. After a certain amount of time, split masses will merge

6) BONUS - Human Opponents
   1. You can play against other people in real time
   2. Add unique identifying features to human players (usernames)
   
7) BONUS - High Scores
   1. A player's mass is equivalent to their score
   2. High scores are persisted and presented on the app

* ## Architecture and Technologies
  * JavaScript for overall structure and game logic
  * HTML5 Canvas for DOM manipulation and rendering

* ## Implementation Timeline
  * Thursday
    * Create the App Framework, Background, & Game View Port 
    
  * Friday
    * Create the Player Object/Movement

  * Weekend/Monday
    * Create and continuously populate the board with inanimate mass objects
    * A player's mass/size increase when a player consumes an inanimate mass object

 
