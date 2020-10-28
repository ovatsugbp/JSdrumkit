function playSound(e) {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function divManipulation(e) {
    const kbd = document.querySelector(`.${e.target.className}`);
    const audio = document.querySelector(`audio[data-name="${e.target.className}"]`);
    // const div = document.querySelector(`.${e.target.id}`);
    kbd.parentElement.classList.add('playing');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(e.target);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const section = document.querySelectorAll('div');
section.forEach(key => key.addEventListener('click', divManipulation));


window.addEventListener('keydown', playSound);
