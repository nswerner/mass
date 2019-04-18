# Priority Tasks

1) Change Movement to continue in the direction of the mouse from center
    - give indicator of movement direction
        - COMPLETE (put cursor back on the screen)
    - directionality it suspect now too
        -top right has ceased to function at medium mass;
        - at larger radius, all directionality goes out the window => refactor speed component
        - COMPLETE
    - large players are rendering out of the map;
        - COMPLETE

2) Create Enemies
    - need to spend one more day fine tuning the whole ai draw/decision tree
    - enemies will "vibrate" / bounce back and forth between decisions;
    - suspect distance calculations, or they've met their movement target, move off, and move back to it;


3) repopulate AI doesn't work as expected because we're not removing AI from the array, we're just changing their consumed status;
    - COMPLETE easy fix: call it more regularly with no conditionals on computers array length



4) flesh out the AI movement
    - MOSTLY COMPLETE, it needs one more day of finetuning;

5) WHEN GAME IS OVER, introduce ever expanding mass that takes up the whole screen and pops up a modal to restart
    - when player wins, player enlarges
    - when player loses, the computer that ate player enlarges

6) Clicking start initiates a new game