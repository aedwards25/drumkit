function removeTransition(e) {
    if (e.propertyName !== "transform") return;

    e.target.classList.remove('playing');
}

function playSounds(e) {
var sound = document.querySelector (`audio[data-key="${e.keyCode}"]`);
var key = document.querySelector(`div[data-key="${e.keyCode}"]`);

if (!sound) return;

key.classList.add('playing');

sound.currentTime = 0;
sound.play();
}

var keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSounds);