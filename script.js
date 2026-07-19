const menuToggle =
document.querySelector(".menu-toggle");
const menu =
document.querySelector(".menu");

menuToggle.addEventListener("click",(e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});
menu.addEventListener("click", (e) => {
    e.stopPropagation();
});
document.addEventListener("click", () =>{
    menu.classList.remove("active");
});

const topBtn =
document.getElementById("topBtn");
window.addEventListener("scroll", () =>{

    if(window.scrollY > 300){
        topBtn.style.display ="block";
    } else{
        topBtn.style.display ="none";
    }
});

topBtn.addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

