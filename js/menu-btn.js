let menuBtn = document.querySelector('.menu-btn');
let navItems = document.querySelectorAll('.nav-item');
let menu = document.querySelector('.menu');
let toggled = false;

function myFunction() {

    if (toggled == false) {
        menuBtn.classList.toggle('menu-btn_active');
        menu.classList.toggle('menu_hiding');
        setTimeout(()=>{
            menu.classList.toggle('menu_hidden')
    }, 300);

        toggled = true;


    } else {
        menuBtn.classList.toggle('menu-btn_active');
        menu.classList.toggle('menu_hiding');
        setTimeout(()=>{
                menu.classList.toggle('menu_hidden')
        }, 500);
        toggled = false;
    }
}

/*
setTimeout(()=>{
    if (toggled == false) {
        menu.classList.toggle('menu_hidden')
    }
}, 200);
*/