const open_menu=document.querySelector(".open-menu");

const icons=document.querySelector(".navbar");
const faicons=document.querySelector(".icons");
const close_icon=document.querySelector(".close");
const heading=document.querySelector(".heading");
const micons=document.querySelector(".micons");

open_menu.addEventListener('click',()=>{

    icons.style.display="flex";
    icons.style.top="0";
    micons.classList.remove('none');
    close_icon.style.display="flex";

    
    
})
close_icon.addEventListener('click',()=>{

    icons.style.top="-100%";
    
})