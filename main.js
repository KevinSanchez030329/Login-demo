let Menu = document.querySelector("#nav");
let IconMenu = document.querySelector("#btnMenu");
let CountMenu = 0;

function MenuMove(){

    if(CountMenu == 0){
        Menu.style.left = "0%";
        CountMenu = 1;
    }else{
        Menu.style.left = "-100%";
        CountMenu = 0;
    }
};

IconMenu.addEventListener('click', MenuMove, true);