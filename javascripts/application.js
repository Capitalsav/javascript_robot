var notification = new UserNotification();
var field = new Field();
var fieldDrawer = new FieldDrawer();
var gamePlay = new GamePlay();

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById('start-input-container').remove();
    document.getElementById('canvas-container').remove();
    document.getElementById('restart-container').remove();
} else {
    document.getElementById('mobile-notification').remove();
}