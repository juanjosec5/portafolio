
window.onload = textico;


window.addEventListener('resize', textico);


function textico() {
    if (window.innerWidth >= 1080) {
        let textico = document.querySelector('#textico').innerHTML = '(Move the mouse around!)'
    } else {
        let textico = document.querySelector('#textico').innerHTML = '(Tap the screen!)'
    }
}