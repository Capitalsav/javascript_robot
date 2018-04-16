function FieldDrawer() {
    var canvas = document.getElementById('field-canvas');

    var xStartPosition = 50;
    var yStartPosition = 50;
    var elementWidth = 50;
    var elementHeight = 50;

    this.fieldDraw = function (field_for_draw) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        field_for_draw.getField().forEach(function (xItem, i, xArr) {
            xArr[i].forEach(function (yItem, j, yArr) {
                context.beginPath();
                if (yItem === 1) {
                    context.fillStyle = FIELD_COLOR;
                    context.fillRect(xStartPosition * i, yStartPosition * j, elementWidth, elementHeight);
                }
                context.strokeStyle = FIELD_COLOR;
                context.rect(xStartPosition * i, yStartPosition * j, elementWidth, elementHeight);
                context.stroke();
            });
        });
    }
}