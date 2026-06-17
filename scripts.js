let hour = new Date().getHours();
let greetingText = "";

function showGreeting() {

if (hour < 12) {
greetingText = "goodmorning";
}
else if (hour < 17){
greetingText = "goodAfternoon";
}
else {
greetingText = "GoodEvening";
}
document.getElementById("greeting").innerText = greetingText;
}

if (window.location.pathname.includes("/index.html")) {
showGreeting(); 
}

let wallpaper = 'url("snake.jpg")';

function switchWallpaper() {
if (wallpaper == 'url("snake.jpg")'){
wallpaper = 'url("snake2.jpg")';
}
else {
wallpaper = 'url("snake.jpg")';
}
document.body.style.backgroundImage = wallpaper;
}



