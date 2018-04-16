function Field() {
    var fieldArray = [];

    this.setField = function (xSize, ySize, xPosition, yPosition) {
        var hightArray = [];
        for (var i = 0; i < ySize; i++) {
            hightArray.push(0);
        }
        for (var i = 0; i < xSize; i++) {
            fieldArray.push(hightArray.slice());
        }
        fieldArray[xPosition][yPosition] = 1;
    };

    this.getField = function () {
        return fieldArray;
    };

    this.setNewRobotPosition = function (xPosition, yPosition) {
        fieldArray.forEach(function (xItem, i, xArr) {
            xArr[i].forEach(function (yItem, j, yArr) {
                if (yItem === 1) {
                    fieldArray[i][j] = 0;
                }
            });
        });
        fieldArray[xPosition][yPosition] = 1;
    }
}