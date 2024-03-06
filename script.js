function removeTransition(e) {
    if (e.PropertyName !== transform) return;

    e.target.classList.remove("playing");
}

function audio(e) {
let sound = document.querySelector (`audio[data-key="${e.keyCode}"]`)
let key = document.querySelector(`div[data-key="${e.keyCode}"]`)

if (!sound) return;
key.classList.add("playing");

sound.currentTime = 0;
sound.play();
}


const keys = Array.from(document.querySelectorAll('.key'));