let menuBtn = document.querySelector('.menu-btn');
let navItems = document.querySelectorAll('.nav-item');
let menu = document.querySelector('.menu');
let toggled = false;

function myFunction() {

    if (toggled == false) {
        menuBtn.classList.toggle('menu-btn_active');
        setTimeout(() => {
            menu.classList.toggle('menu_hidden')
        }, 200);

        toggled = true;

    } else {
        menuBtn.classList.toggle('menu-btn_active');
        menu.classList.toggle('menu_hiding');
    }
}

/*
setTimeout(()=>{
    if (toggled == false) {
        menu.classList.toggle('menu_hidden')
    }
}, 200);
*/