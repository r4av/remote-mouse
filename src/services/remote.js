var robot = require("robotjs");

function mouseMove(coordinate){
    var mousePosition = this.mousePosition();
    mousePosition.x = mousePosition.x + coordinate.x;
    mousePosition.y = mousePosition.y + coordinate.y;
    robot.moveMouse(mousePosition.x, mousePosition.y);
}

function mouseClick(coordinate){
    // robot.moveMouse(coordinate.x, coordinate.y);
}

function mousePosition(){
    return robot.getMousePos();
}

module.exports = {
    mouseMove,
    mouseClick,
    mousePosition,
}