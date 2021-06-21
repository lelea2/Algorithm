// http://jsfiddle.net/jfriend00/rQwD4/
// key: use setInterval

var console = document.getElementById('console');

var log = function () {
    console.innerHTML = Array.prototype.join.call(arguments, '');
};


var imageSrc = 'http://environmentalgeography.files.wordpress.com/2010/02/nature_by_abhishekultimatum.jpg?q=' + Math.random();

var img = document.createElement('img');
img.id = "testImage";

var loaded = false, wait;

img.addEventListener('load', function () { loaded = true; }, true);

wait = setInterval(function () {
  loaded ? clearInterval(wait) : log(img.width, 'x', img.height, '<br>', img.naturalWidth, 'x', img.naturalHeight, '<br>');
}, 0);

document.body.appendChild(img);

img.setAttribute('src', imageSrc);
