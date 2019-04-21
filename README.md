# Mass
* ## [Live](https://r0ckf0rd.github.io/mass/)

* ## Background and Overview

Agar.io is a very simple yet engaging game. The point of the game is to increase your mass by eating food and other players and to avoid players larger than you. The larger you are, the slower you move. You can also eject half of your mass to capture/eat other players!

  * Wireframes
   
    * Homepage ![Homepage](https://github.com/r0ckf0rd/mass/blob/master/assets/images/wireframes/Homepage.png) <br/><br/>

    * Gameplay ![Gameplay](https://github.com/r0ckf0rd/mass/blob/master/assets/images/wireframes/Gameplay.png) <br/><br/>

    * Gameplay Annotated ![Gameplay Annotated](https://github.com/r0ckf0rd/mass/blob/master/assets/images/wireframes/Gameplay-Annotated.png) <br/><br/>


  * Gameplay
    * Homepage ![Homepage](https://github.com/r0ckf0rd/mass/blob/gameover/assets/images/gameplay/start.png)
	
	* Game Beginning ![Beginning](https://github.com/r0ckf0rd/mass/blob/gameover/assets/images/gameplay/small.png)
	
	* Computer Players ![Computer Players](https://github.com/r0ckf0rd/mass/blob/gameover/assets/images/gameplay/computers.png)
	
	* Middle Game ![Middle](https://github.com/r0ckf0rd/mass/blob/gameover/assets/images/gameplay/larger.png)
	
	* End Game ![End](https://github.com/r0ckf0rd/mass/blob/gameover/assets/images/gameplay/very_larger.png)
	
	* Critical Mass ![Critical Mass](https://github.com/r0ckf0rd/mass/blob/gameover/assets/images/gameplay/critical_mass.png)
	
	* Game Over ![Game Over](https://github.com/r0ckf0rd/mass/blob/gameover/assets/images/gameplay/lose.png)


* ## Key Features
	* Configured a camera object that tracks and focuses on the player as they navigate a playfield larger than the display. Delegated animation to the camera object, significantly reducing intensive logic calculations on portions of the playfield unseen by the player
	* Developed computer players that make real-time decisions with information from their environment 
	* Utilized the players state to trigger DOM manipulation of the start, pause, and game over modals
	
	

```javascript
    class Camera {
        constructor(board, canvasWidth, canvasHeight, context, dpi) {
			...
        }
    
        updatePos() {
            this.boardX = this.player.boardX - (this.canvasWidth / 2);
            this.boardY = this.player.boardY - (this.canvasHeight / 2);
        }
    
        within() {
            this.matter = [];
            for (let idx = 0; idx < this.allMatter.length; idx += 1) {
                if (this.allMatter[idx].boardX < this.boardX || this.allMatter[idx].boardX > this.boardX + this.canvasWidth) {
                    continue;   
                } else if (this.allMatter[idx].boardY < this.boardY || this.allMatter[idx].boardY > this.boardY + this.canvasHeight) {
                    continue;
                } else if (this.allMatter[idx].consumed === false) {
                    this.matter.push(this.allMatter[idx]);
                }
            }
            
            this.computers = [];
            for (let idx = 0; idx < this.allComputers.length; idx += 1) {
                if (this.allComputers[idx].boardX + this.allComputers[idx].radius < this.boardX - 200 || this.allComputers[idx].boardX - this.allComputers[idx].radius > this.boardX + this.canvasWidth + 200) {
                    continue;
                } else if (this.allComputers[idx].boardY + this.allComputers[idx].radius < this.boardY - 200 || this.allComputers[idx].boardY - this.allComputers[idx].radius > this.boardY + this.canvasHeight + 200) {
                    continue;
                } else if (this.allComputers[idx].consumed === false) {
                    this.computers.push(this.allComputers[idx]);
                }
            }
        }
		
		 draw() {
        //grab all objects within frame, check for collisions, and relimit data
        this.within();
        this.checkCollisions();        
        this.within();
        
        //draw in-frame matter
        this.drawMatter();

        //draw in-frame computers
        this.drawComputers();

        //draw player
        this.drawPlayer();
 
    }
}
```


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


