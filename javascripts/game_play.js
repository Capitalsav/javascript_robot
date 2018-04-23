function GamePlay() {
    var xRobotPosition;
    var yRobotPosition;

    this.moveLeftHandler = function (movementField) {
        setCurrentRobotPosition(movementField);
        if (xRobotPosition - 1 >= 0) {
            field.setNewRobotPosition(xRobotPosition - 1, yRobotPosition);
        } else {
            notification.showRobotDownWarningMessage();
        }
    };

    this.moveUpHandler = function (movementField) {
        setCurrentRobotPosition(movementField);
        if (yRobotPosition - 1 >= 0) {
            field.setNewRobotPosition(xRobotPosition, yRobotPosition - 1);
        } else {
            notification.showRobotDownWarningMessage();
        }
    };

    this.moveRightHandler = function (movementField) {
        setCurrentRobotPosition(movementField);
        if (xRobotPosition + 1 <= movementField.getField().length - 1) {
            field.setNewRobotPosition(xRobotPosition + 1, yRobotPosition)
        } else {
            notification.showRobotDownWarningMessage();
        }
    };

    this.moveDownHandler = function (movementField) {
        setCurrentRobotPosition(movementField);
        if (yRobotPosition + 1 <= movementField.getField()[0].length - 1) {
            field.setNewRobotPosition(xRobotPosition, yRobotPosition + 1)
        } else {
            notification.showRobotDownWarningMessage();
        }
    };

    function setCurrentRobotPosition(movementField) {
        movementField.getField().forEach(function (xItem, i, xArr) {
            xArr[i].forEach(function (yItem, y, yArr) {
                if (yItem === 1) {
                    xRobotPosition = i;
                    yRobotPosition = y;
                }
            });
        });
    }
}