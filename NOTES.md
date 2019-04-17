# Priority Tasks

1) Change Movement to continue in the direction of the mouse from center
    - give indicator of movement direction
    - render player gradient based on mouse pos
    - player speed is still wonky in the Y-axis
    - directionality it suspect now too
        -top right has ceased to function at medium mass;
        - at larger radius, all directionality goes out the window => refactor speed component

    - large players are rendering out of the canvas;

2) Create Scale

3) Create Enemies



!!! repopulate AI doesn't work as expected because we're not removing AI from the array, we're just changing their consumed status;
!!! easy fix: call it more regularly with no conditionals on computers length
!!! harder fix: splice it from the computers array -> introduced issues with objects not rendering on collision check


!!! flesh out the AI movement