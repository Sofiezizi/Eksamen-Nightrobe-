

/* Animeret tekst */

var string = "The digital wardrobe app";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 120);
})();
