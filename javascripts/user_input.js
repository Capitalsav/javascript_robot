document.getElementById('btn-start-game').onclick = function () {
    var xSize = document.getElementById('input-field-width').value;
    var ySize = document.getElementById('input-field-height').value;
    var xPosition = document.getElementById('input-field-x-position').value;
    var yPosition = document.getElementById('input-field-y-position').value;
    if (checkWrongUserInput(xSize, ySize, xPosition, yPosition)) {
        alert('Field size max = 11x11. Robot position can not be more than field size. Fields can not be blank');
        window.location.reload();
        return;
    }
    field.setField(xSize, ySize, xPosition, yPosition);
    fieldDrawer.fieldDraw(field);
    document.getElementById('start-input-container').remove();
    document.getElementById('restart-container').classList.add('show-element');
};

document.onkeydown = function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            gamePlay.moveLeftHandler(field);
            break;
        case 'ArrowUp':
            gamePlay.moveUpHandler(field);
            break;
        case 'ArrowRight':
            gamePlay.moveRightHandler(field);
            break;
        case 'ArrowDown':
            gamePlay.moveDownHandler(field);
            break;
        default:
            break;
    }
    fieldDrawer.fieldDraw(field);
};

document.getElementById('btn-restart-game').onclick = function () {
    window.location.reload();
};

function checkWrongUserInput(xSize, ySize, xPosition, yPosition) {
    if (xSize < 0 || ySize < 0 || xPosition < 0 || yPosition < 0) {
        return true;
    } else if (xSize > 11 || ySize > 11 || xPosition > xSize - 1 || yPosition > ySize - 1) {
        return true;
    } else if (xSize === '' || xSize === undefined || ySize === '' || ySize === undefined) {
        return true;
    } else if (xPosition === '' || xPosition === undefined || yPosition === '' || yPosition === undefined) {
        return true;
    }
    return false;
}