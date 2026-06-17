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
let savedwallpaper = localStorage.getItem("wallpaper");

if (savedwallpaper) {
    wallpaper = savedwallpaper;
}
document.body.style.backgroundImage = wallpaper;
function switchWallpaper() {
if (wallpaper == 'url("snake.jpg")') {
wallpaper = 'url("snake2.jpg")';
}
else {
wallpaper = 'url("snake.jpg")';
}
localStorage.setItem("wallpaper", wallpaper);
document.body.style.backgroundImage = wallpaper;
}



